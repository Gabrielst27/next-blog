import { PostModel } from '@/models/post.model';

export type PublicPostDto = Omit<PostModel, 'updatedAt'>;

export function makePublicPostFromPostModel(post: PostModel): PublicPostDto {
  const { updatedAt, ...publicProps } = post;
  return publicProps;
}

export function makePartialPublicPost(
  post?: Partial<PostModel>,
): PublicPostDto {
  return {
    id: post?.id || '',
    title: post?.title || '',
    slug: post?.slug || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    coverImageUrl: post?.coverImageUrl || '',
    published: post?.published || false,
    createdAt: post?.createdAt || '',
    author: post?.author || '',
  };
}
