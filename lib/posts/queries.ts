import { cache } from 'react';
import { postService } from '../../repositories/post/post.service';

export const findAllPublishedPostsCached = cache(async () => {
  console.log('findAllPublished');
  return await postService.findAllPublished();
});

export const findPostBySlugCached = cache(async (slug: string) => {
  console.log('findBySlug');
  const post = await postService.findBySlug(slug).catch(() => undefined);
  return post;
});
