import { cache } from 'react';
import { drizzlePostRepository } from '@/repositories/post/drizzle-post.repository';

export const findAllPublishedPostsCached = cache(async () => {
  return await drizzlePostRepository.findAllPublished();
});

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await drizzlePostRepository
    .findPublishedBySlug(slug)
    .catch(() => undefined);
  return post;
});
