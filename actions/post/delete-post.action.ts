'use server';

import { ActionResult } from '@/dto/post/action-result.dto';
import { PostModel } from '@/models/post.model';
import { drizzlePostRepository } from '@/repositories/post/drizzle-post.repository';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deletePostAction(id: string): Promise<ActionResult> {
  //TODO: check user login before deletion
  //TODO: implement post deletion
  if (!id || typeof id !== 'string') {
    return {
      error: '[ERR-005]: Por favor, contate o suporte',
      successMessage: '',
    };
  }
  let post: PostModel | undefined = undefined;
  try {
    post = await drizzlePostRepository.deleteById(id);
  } catch (e) {
    if (e instanceof Error) {
      return {
        error: e.message,
        successMessage: '',
      };
    }
    return {
      error: '[ERR-004]: Por favor, contate o suporte',
      successMessage: '',
    };
  }

  revalidateTag('posts-admin', 'max');
  revalidateTag(`post-admin-${id}`, 'max');
  revalidateTag('posts', 'max');
  revalidateTag(`post-${post.slug}`, 'max');
  redirect('/admin/post');
}
