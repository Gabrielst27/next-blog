import { drizzleDb } from '@/db/drizzle';
import { PostModel } from '@/models/post.model';
import { IPostRepository } from '@/repositories/post/post.repository.interface';

export class DrizzleRepository implements IPostRepository {
  async findAllPublished(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      orderBy: (post, { desc }) => desc(post.createdAt),
      where: (post, { eq }) => eq(post.id, id),
    });
    if (!post) throw Error('Post não encontrado com o ID fornecido');
    return post;
  }

  async findPublishedBySlug(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      orderBy: (post, { desc }) => desc(post.createdAt),
      where: (post, { eq, and }) =>
        and(eq(post.published, true), eq(post.slug, slug)),
    });
    if (!post) throw Error('Post não encontrado com o slug fornecido');
    return post;
  }
}

export const drizzlePostRepository = new DrizzleRepository();
