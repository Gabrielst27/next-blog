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
  const post = drizzlePostRepository.findById(id).catch(() => undefined);
  if (!id || typeof id !== 'string' || !post) {
    return {
      error: 'Invalid ID',
      successMessage: '',
    };
  }
  await drizzlePostRepository.deleteById(id);
  revalidateTag('posts-admin', 'max');
  revalidateTag(`post-admin-${id}`, 'max');
  revalidateTag('posts', 'max');
  return {
    error: '',
    successMessage: 'Post deleted',
  };
}
