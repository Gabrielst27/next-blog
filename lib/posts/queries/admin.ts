import { PostModel } from '@/models/post.model';
import { drizzlePostRepository } from '@/repositories/post/drizzle-post.repository';
import { cacheLife, cacheTag } from 'next/cache';

export const findPostByIdAdminCached = async (
  id: string,
): Promise<PostModel> => {
  'use cache';
  cacheTag(`post-admin-${id}`);
  cacheLife('seconds');
  const post = await drizzlePostRepository.findById(id);
  return post;
};

export const findAllPostsAdminCached = async (): Promise<PostModel[]> => {
  'use cache';
  cacheTag(`posts-admin`);
  cacheLife('seconds');
  const posts = await drizzlePostRepository.findAll();
  return posts;
};
