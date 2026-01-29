import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdownComponent({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        'prose prose-invert',
        'w-full max-w-none',
        'overflow-hidden',
        'prose-a:transition',
        'prose-a:no-underline',
        'prose-a:text-blue-400',
        'prose-a:hover:text-blue-600',
        'prose-img:mx-auto',
        'lg:prose-lg',
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return '';
            return (
              <div className="overflow-x-auto">
                <table className="w-full min-w-150" {...props}></table>
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
