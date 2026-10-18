import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const docsRoot = path.join(projectRoot, 'docs');
const pageExtensions = new Set(['.md', '.mdx']);

async function findPages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      pages.push(...(await findPages(entryPath)));
    } else if (entry.isFile() && pageExtensions.has(path.extname(entry.name))) {
      pages.push(entryPath);
    }
  }

  return pages;
}

function splitInlineAuthors(value) {
  const authors = [];
  let author = '';
  let quote = null;

  for (const character of value) {
    if (quote) {
      author += character;
      if (character === quote) {
        quote = null;
      }
    } else if (character === '"' || character === "'") {
      quote = character;
      author += character;
    } else if (character === ',') {
      authors.push(author.trim());
      author = '';
    } else {
      author += character;
    }
  }

  authors.push(author.trim());
  return authors;
}

function isAuthorName(rawValue) {
  let value = rawValue.replace(/\s+#.*$/, '').trim();

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1).trim();
  }

  return Boolean(
    value &&
    !/^(?:true|false|[-+]?\d+(?:\.\d+)?|null|~)$/i.test(value) &&
    !value.startsWith('[') &&
    !value.startsWith('{') &&
    value !== '|' &&
    value !== '>' &&
    !/^\[[^\]]+\]\([^)]+\)$/.test(value) &&
    !/https?:\/\//i.test(value),
  );
}

function hasAuthor(frontmatter) {
  const lines = frontmatter.split(/\r?\n/);
  const authorLineIndices = lines
    .map((line, index) => (/^author\s*:/.test(line) ? index : -1))
    .filter((index) => index >= 0);

  if (authorLineIndices.length !== 1) {
    return false;
  }

  const authorLineIndex = authorLineIndices[0];
  const value = lines[authorLineIndex]
    .slice(lines[authorLineIndex].indexOf(':') + 1)
    .replace(/\s+#.*$/, '')
    .trim();
  let authors;

  if (!value) {
    authors = [];
    for (const line of lines.slice(authorLineIndex + 1)) {
      if (!line.trim() || /^\s*#/.test(line)) {
        continue;
      }

      if (!/^\s*-/.test(line)) {
        break;
      }

      const listItem = line.match(/^\s*-\s+(.+)$/);
      if (!listItem) {
        return false;
      }
      authors.push(listItem[1]);
    }
  } else if (value.startsWith('[') && value.endsWith(']')) {
    authors = splitInlineAuthors(value.slice(1, -1));
  } else {
    authors = [value];
  }

  return authors.length > 0 && authors.every(isAuthorName);
}

const pages = await findPages(docsRoot);
const invalidPages = [];

for (const pagePath of pages) {
  const content = await readFile(pagePath, 'utf8');
  const frontmatterMatch = content.match(
    /^\uFEFF?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/,
  );

  if (!frontmatterMatch || !hasAuthor(frontmatterMatch[1])) {
    invalidPages.push(path.relative(projectRoot, pagePath));
  }
}

if (invalidPages.length > 0) {
  console.error(
    'Every Markdown and MDX page under docs/ must have one or more plain author names in frontmatter:',
  );
  for (const pagePath of invalidPages) {
    console.error(`- ${pagePath}`);
  }
  process.exitCode = 1;
} else {
  console.log(
    `Validated author frontmatter in ${pages.length} documentation pages.`,
  );
}
