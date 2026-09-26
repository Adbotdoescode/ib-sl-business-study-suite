'use client';

import React from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { cn } from '@/lib/utils';

export interface MarkdownRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
  components?: Components;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className,
  inline = false,
  components: customComponents = {},
}) => {
  // Preprocess display formula blocks ($$...$$) into clean editorial callouts
  const processedContent = React.useMemo(() => {
    if (!content) return '';
    return content.replace(/\$\$([\s\S]*?)\$\$/g, (_, formula) => {
      const cleaned = formula
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\longrightarrow/g, ' ──> ')
        .replace(/\\rightarrow/g, ' ──> ')
        .replace(/\\uparrow/g, ' ▲ ')
        .trim();
      return `\n\n> **Formula / Sequence:** \`${cleaned}\`\n\n`;
    });
  }, [content]);

  if (!content) return null;

  const defaultComponents: Components = {
    // Inline mode maps p to span to avoid invalid HTML nesting in buttons/headings
    p: ({ children }) => {
      if (inline) {
        return <span className="inline">{children}</span>;
      }
      return <p className="leading-relaxed mb-3 last:mb-0 whitespace-pre-line">{children}</p>;
    },
    h1: ({ children }) => (
      <h1 className="text-xl font-bold tracking-tight text-text-primary mt-6 mb-3 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-semibold tracking-tight text-text-primary mt-5 mb-2 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold tracking-tight text-text-primary mt-4 mb-1.5 first:mt-0">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-sm font-semibold tracking-tight text-text-primary mt-3 mb-1 first:mt-0">
        {children}
      </h4>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-5 space-y-1 my-2 text-inherit">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-5 space-y-1 my-2 text-inherit">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed pl-0.5">{children}</li>
    ),
    table: ({ children }) => (
      <div className="my-4 overflow-x-auto rounded-xl border border-border shadow-subtle">
        <table className="min-w-full border-collapse text-xs sm:text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-surface-subtle border-b border-border">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-border/60">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-surface-subtle/40 transition-colors">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="py-2.5 px-3.5 text-left font-semibold text-text-primary uppercase tracking-wider text-[11px] border-r border-border last:border-r-0">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="py-2.5 px-3.5 text-text-secondary border-r border-border last:border-r-0 align-top">
        {children}
      </td>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-brand-600 bg-surface-subtle/50 px-4 py-2.5 my-3 rounded-r-lg italic text-text-secondary">
        {children}
      </blockquote>
    ),
    code: ({ className: codeClassName, children, ...props }) => {
      const match = /language-(\w+)/.exec(codeClassName || '');
      const isCodeBlock = Boolean(match) || String(children).includes('\n');
      if (!isCodeBlock) {
        return (
          <code
            className={cn(
              'font-mono text-xs bg-surface-subtle text-brand-700 px-1.5 py-0.5 rounded border border-border',
              codeClassName
            )}
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <code className={cn('font-mono text-xs text-text-primary', codeClassName)} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="my-3 overflow-x-auto rounded-xl bg-surface-subtle p-4 border border-border font-mono text-xs sm:text-[13px] text-text-primary leading-snug whitespace-pre">
        {children}
      </pre>
    ),
    a: ({ href, children, ...props }) => (
      <a
        href={href}
        className="text-brand-600 hover:text-brand-700 underline underline-offset-2 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-inherit">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    hr: () => <hr className="my-4 border-t border-border" />,
    ...customComponents,
  };

  if (inline) {
    return (
      <span className={cn('inline', className)}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={defaultComponents}
        >
          {processedContent}
        </ReactMarkdown>
      </span>
    );
  }

  return (
    <div
      className={cn(
        'markdown-content text-xs sm:text-sm text-text-secondary leading-relaxed space-y-3 font-normal',
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={defaultComponents}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
