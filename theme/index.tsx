import { useFrontmatter, useLang, usePage } from '@rspress/core/runtime';
import {
  getCustomMDXComponent as getBasicCustomMDXComponent,
  Layout as BasicLayout,
} from '@rspress/core/theme-original';
import { isValidElement } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import './index.css';

const OriginalH1 = getBasicCustomMDXComponent().h1;

function getTextContent(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join('');
  }

  if (
    isValidElement<{
      'aria-hidden'?: boolean | 'true' | 'false';
      children?: ReactNode;
    }>(node)
  ) {
    return node.props['aria-hidden'] === true ||
      node.props['aria-hidden'] === 'true'
      ? ''
      : getTextContent(node.props.children);
  }

  return '';
}

function normalizeText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function H1WithAuthor(props: ComponentProps<typeof OriginalH1>) {
  const { page } = usePage();
  const { frontmatter } = useFrontmatter();
  const lang = useLang();
  const rawAuthor = (frontmatter as unknown as Record<string, unknown>).author;
  const authors = (Array.isArray(rawAuthor) ? rawAuthor : [rawAuthor])
    .filter((author): author is string => typeof author === 'string')
    .map((author) => author.trim())
    .filter(Boolean);

  const heading = normalizeText(getTextContent(props.children));
  const pageHeading = (page as typeof page & { headingTitle?: string })
    .headingTitle;
  const title = normalizeText(pageHeading || page.title || '');
  const isPageTitle = heading !== '' && heading === title;
  const label = lang === 'zh' ? '作者' : 'Author';
  const separator = lang === 'zh' ? '、' : ', ';

  return (
    <>
      <OriginalH1 {...props} />
      {isPageTitle && authors.length > 0 ? (
        <div className="fuxi-doc-author">
          {label}: {authors.join(separator)}
        </div>
      ) : null}
    </>
  );
}

function Layout() {
  return <BasicLayout components={{ h1: H1WithAuthor }} />;
}

export { Layout };
// The theme must expose Rspress' original components to MDX and other pages.
// eslint-disable-next-line react-refresh/only-export-components
export * from '@rspress/core/theme-original';
