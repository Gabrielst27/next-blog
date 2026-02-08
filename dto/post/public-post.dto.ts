import { PostModel } from '@/models/post.model';

export type PublicPostDto = Omit<PostModel, 'updatedAt'>;

export function makePublicPost(post: PostModel) {
  const { updatedAt, ...publicProps } = post;
  return publicProps;
}
