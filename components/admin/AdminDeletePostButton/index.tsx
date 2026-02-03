'use client';

import { deletePostAction } from '@/actions/post/delete-post.action';
import { PostModel } from '@/models/post.model';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { useTransition } from 'react';

type AdminDeletePostButtonProps = {
  post: PostModel;
};

export function AdminDeletePostButton({ post }: AdminDeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();

  async function handleClick() {
    if (!confirm('Tem certeza que deseja excluir o post?')) return;
    startTransition(async () => {
      const result = await deletePostAction(post.id);
    });
  }

  return (
    <button
      className={clsx(
        'text-red-500 cursor-pointer',
        'hover:text-red-700 hover:scale-120 transition',
        'disabled:text-slate-600 disabled:cursor-not-allowed',
      )}
      aria-label={`Apagar post: ${post.title}`}
      title={`Apagar post: ${post.title}`}
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}
