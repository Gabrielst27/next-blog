'use client';

import { deletePostAction } from '@/actions/post/delete-post.action';
import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';
import { PostModel } from '@/models/post.model';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { toast } from 'react-toastify';

type AdminDeletePostButtonProps = {
  post: PostModel;
};

export function AdminDeletePostButton({ post }: AdminDeletePostButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  async function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    toast.dismiss();
    startTransition(async () => {
      const result = await deletePostAction(post.id);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success(result.successMessage);
        router.refresh();
      }
    });
    setShowDialog(false);
  }

  function handleCancel() {
    setShowDialog(false);
  }

  return (
    <>
      <button
        className={clsx(
          'text-red-400 cursor-pointer',
          'hover:text-red-500 hover:scale-120 transition',
          'disabled:text-slate-600 disabled:cursor-not-allowed',
        )}
        aria-label={`Apagar post: ${post.title}`}
        title={`Apagar post: ${post.title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon />
      </button>
      {showDialog && (
        <Dialog
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          isVisible={showDialog}
          title="Excluir o post?"
          content={`O post "${post.title}" será excluído permanentemente, e não será possível recuperá-lo após a exclusão. Deseja continuar?`}
          disabled={isPending}
        />
      )}
    </>
  );
}
