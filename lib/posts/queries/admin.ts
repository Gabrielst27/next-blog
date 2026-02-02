import { PostModel } from '@/models/post.model';
import { drizzlePostRepository } from '@/repositories/post/drizzle-post.repository';

export const findPostByIdAdmin = async (id: string): Promise<PostModel> => {
  const post = await drizzlePostRepository.findById(id);
  return post;
};

export const findAllPostsAdmin = async (): Promise<PostModel[]> => {
  const posts = await drizzlePostRepository.findAll();
  return posts;
};
