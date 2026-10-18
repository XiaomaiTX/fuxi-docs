---
author: Hugyyyy
title: Documentation Standards
description: Standards for document structure, frontmatter, author credits, content organization, and source citations in the Fuxi Legion documentation.
---

# Documentation Standards

These standards apply to Markdown and MDX documents under **docs/**. Follow them when adding or updating documentation.

## File location and format

- English documentation belongs under **docs/en/**, in a directory that matches its subject.
- Use **.md** for standard pages and **.mdx** when you need React components or other MDX features.
- Edit source files under **docs/**. **doc_build/** contains build output; do not edit it manually.
- When adding a page, update the relevant directory's **\_meta.json** if needed to make it appear in the sidebar.

## Frontmatter

Every documentation page must have **title**, **description**, and **author** fields. For example:

```yaml
---
title: Page title
description: A short description of the page
author: Content author
---
```

For multiple authors, use a YAML list:

```yaml
author:
  - First author
  - Second author
```

List one or more names in **author**; do not put URLs or Markdown links there. Author names appear below the page title.

### Author credits

- For a new original page, list the people who wrote the content.
- If a new page primarily reproduces, translates, or adapts another author's work, credit the original author. If you also add substantial original content, list yourself as an author too.
- Cite accessible source links in the body. Put source authors' names in **author**, not their URLs.
- When adding content to an existing page, preserve all existing authors and their order, then append the new contributor if they wrote or substantially added content. Do not remove historical authors.
- A Git commit author is not necessarily a content author. List someone only if they wrote or substantially edited the content.

## Organizing content

- Use one level-one heading per page, matching the **title**, then organize lower-level headings in order.
- Write clearly and accurately. Use numbered lists for procedures, bullets for parallel items, and tables for comparisons.
- Add a language identifier to code blocks for syntax highlighting.
- Use descriptive link text and check that page links, external sources, and images are accessible.
- Check reliable sources for game mechanics, corporation rules, history, and member information. AI-generated factual claims also need human review.

## Checks before submitting

From the repository root, you can run:

```bash
git diff --check
pnpm run format
pnpm run lint
pnpm run build
```

**pnpm run lint** and **pnpm run build** check the author field on documentation pages. The build also checks Rspress pages and navigation.
