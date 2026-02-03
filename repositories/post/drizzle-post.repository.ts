import { drizzleDb } from '@/db/drizzle';
import { PostModel } from '@/models/post.model';
import { IPostRepository } from '@/repositories/post/post.repository.interface';
import { DELAY_SIMULATION_MS } from '@/utils/constants';
import { formatLog } from '@/utils/format-log';
import { simulateDelay } from '@/utils/simulate-delay';

export class DrizzleRepository implements IPostRepository {
  async findAllPublished(): Promise<PostModel[]> {
    await simulateDelay(DELAY_SIMULATION_MS);
    formatLog('findAllPublished');
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await simulateDelay(DELAY_SIMULATION_MS);
    formatLog('findAll');
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await simulateDelay(DELAY_SIMULATION_MS);
    formatLog('findById');
    const post = await drizzleDb.query.posts.findFirst({
      orderBy: (post, { desc }) => desc(post.createdAt),
      where: (post, { eq }) => eq(post.id, id),
    });
    if (!post) throw Error('Post não encontrado com o ID fornecido');
    return post;
  }

  async findPublishedBySlug(slug: string): Promise<PostModel> {
    await simulateDelay(DELAY_SIMULATION_MS);
    formatLog('findPublishedBySlug');
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
