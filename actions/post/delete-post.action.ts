'use server';

import { drizzlePostRepository } from '@/repositories/post/drizzle-post.repository';
import { revalidateTag } from 'next/cache';

type Result = {
  error: string;
  successMessage: string;
};

export async function deletePostAction(id: string): Promise<Result> {
  //TODO: check user login before deletion
  //TODO: implement post deletion
  const post = await drizzlePostRepository.findById(id).catch(() => undefined);
  if (!post) {
    return {
      error: 'Post não encontrado ou já excluído.',
      successMessage: '',
    };
  }
  if (!id || typeof id !== 'string') {
    return {
      error: 'Erro interno ER-001. Contate o suporte.',
      successMessage: '',
    };
  }
  await drizzlePostRepository.deleteById(id);
  revalidateTag('posts-admin', 'max');
  revalidateTag(`post-admin-${id}`, 'max');
  revalidateTag('posts', 'max');
  revalidateTag(`post-${post.slug}`, 'max');
  return {
    error: '',
    successMessage: `Post "${post.title}" deletado com sucesso!`,
  };
}
