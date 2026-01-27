import { cache } from 'react';
import { postService } from '@/repositories/post/post.service';

export const findAllPublishedPostsCached = cache(async () => {
  return await postService.findAllPublished();
});

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postService.findBySlug(slug).catch(() => undefined);
  return post;
});
