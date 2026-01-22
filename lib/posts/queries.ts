import { cache } from 'react';
import { postService } from '../../repositories/post/post.service';

export const findAllPublishedPosts = cache(async () => {
  return await postService.findAllPublished();
});
