import { PostModel } from '@/models/post.model';

export interface IPostRepository {
  findAllPublished(): Promise<PostModel[]>;
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findPublishedBySlug(slug: string): Promise<PostModel>;
  create(post: PostModel): Promise<void>;
  update(
    id: string,
    newPost: Omit<PostModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>,
  ): Promise<PostModel>;
  deleteById(id: string): Promise<PostModel>;
}
