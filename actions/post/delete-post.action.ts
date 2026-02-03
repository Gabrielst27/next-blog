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
  if (!id || typeof id !== 'string') {
    return {
      error: 'Invalid ID',
      successMessage: '',
    };
  }
  await drizzlePostRepository.deleteById(id);
  revalidateTag('admin-posts-list', 'max');
  return {
    error: '',
    successMessage: 'Post deleted',
  };
}
