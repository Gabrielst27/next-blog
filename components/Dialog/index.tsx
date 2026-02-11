'use client';

import { Button } from '@/components/Button';
import clsx from 'clsx';

type DialogProps = {
  isVisible: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  isVisible = false,
  title,
  content,
  onConfirm,
  onCancel,
  disabled = false,
}: DialogProps) {
  if (!isVisible) return null;

  return (
    <div
      className={clsx(
        'fixed z-50 left-0 right-0 top-0 bottom-0',
        'bg-black/50 backdrop-blur-xs',
        'flex justify-center items-center',
      )}
      onClick={onCancel}
    >
      <div
        className={clsx(
          'p-6 mx-6 max-w-xl rounded-2xl',
          'bg-slate-100 text-slate-950 shadow-lg shadow-black-30',
          'flex flex-col gap-6',
        )}
        role="dialog"
        aria-modal={true}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="font-extrabold text-xl text-center">
          {title}
        </h3>
        <p id="dialog-description" className="text-center">
          {content}
        </p>
        <div className="flex justify-around">
          <Button
            variant="ghost"
            autoFocus
            onClick={onCancel}
            disabled={disabled}
          >
            Não
          </Button>
          <Button variant="danger" onClick={onConfirm} disabled={disabled}>
            Sim
          </Button>
        </div>
      </div>
    </div>
  );
}
