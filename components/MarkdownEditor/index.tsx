'use client';

import dynamic from 'next/dynamic';
import { useId } from 'react';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

type MarkdownEditorProps = {
  labelText?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  textareaName: string;
  disabled?: boolean;
};

export function MarkdownEditor({
  labelText = '',
  value,
  setValue,
  textareaName,
  disabled = false,
}: MarkdownEditorProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <MDEditor
        className="whitespace-pre-wrap"
        value={value}
        onChange={(value) => {
          if (value === undefined) return;
          setValue(value);
        }}
        height={400}
        extraCommands={[]}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkGfm]],
        }}
        hideToolbar={disabled}
        textareaProps={{ id, name: textareaName, disabled: disabled }}
      ></MDEditor>
    </div>
  );
}
