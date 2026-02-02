import { PostModel } from '@/models/post.model';

export interface IPostRepository {
  findAllPublished(): Promise<PostModel[]>;
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findPublishedBySlug(slug: string): Promise<PostModel>;
}
