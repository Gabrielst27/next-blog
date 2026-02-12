'use client';
import clsx from 'clsx';

type ErrorMessageProps = {
  contentTitle: string;
  content: React.ReactNode;
};

export function ErrorMessage({ contentTitle, content }: ErrorMessageProps) {
  return (
    <div
      className={clsx(
        'h-full bg-slate-800',
        'my-16 mx-8 p-8 rounded-xl',
        'flex items-center justify-center flex-col gap-8',
      )}
    >
      <h1 className="text-7xl text-center font-bold">{contentTitle}</h1>
      <p className="text-center">{content}</p>
    </div>
  );
}
