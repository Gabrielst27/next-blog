import { drizzlePostRepository } from '@/repositories/post/drizzle-post.repository';
import { cacheLife, cacheTag } from 'next/cache';

export const findAllPublishedPostsCached = async () => {
  'use cache';
  cacheTag('posts');
  cacheLife('seconds');
  return await drizzlePostRepository.findAllPublished();
};

export const findPostBySlugCached = async (slug: string) => {
  'use cache';
  cacheTag(`post-${slug}`);
  cacheLife('seconds');
  const post = await drizzlePostRepository
    .findPublishedBySlug(slug)
    .catch(() => undefined);
  return post;
};
