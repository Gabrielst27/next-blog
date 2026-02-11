import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
import { PostModel } from '@/models/post.model';
import { IPostRepository } from '@/repositories/post/post.repository.interface';
import { eq } from 'drizzle-orm';

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

  async create(post: PostModel): Promise<void> {
    const postExists = await drizzleDb.query.posts.findFirst({
      where: (posts, { or, eq }) =>
        or(eq(posts.id, post.id), eq(posts.slug, post.slug)),
      columns: { id: true },
    });
    if (!!postExists) {
      throw new Error('Já existe um post com esse id ou slug');
    }
    try {
      await drizzleDb.insert(postsTable).values(post);
    } catch (e) {
      throw new Error('[ERR-001]: Por favor, contate o suporte');
    }
  }

  async update(
    id: string,
    newPost: Omit<PostModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>,
  ): Promise<PostModel> {
    const oldPost = await drizzleDb.query.posts.findFirst({
      where: (post, { eq }) => eq(post.id, id),
    });
    if (!oldPost) {
      throw new Error('Post não encontrado na base de dados');
    }

    const now = new Date().toISOString();
    const postData = {
      title: newPost.title,
      excerpt: newPost.excerpt,
      content: newPost.content,
      coverImageUrl: newPost.coverImageUrl,
      published: newPost.published,
      updatedAt: now,
      author: newPost.author,
    };

    try {
      await drizzleDb
        .update(postsTable)
        .set(postData)
        .where(eq(postsTable.id, id));
      return { ...oldPost, ...postData };
    } catch (e) {
      throw new Error('[ERR-006]: Erro desconhecido');
    }
  }

  async deleteById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });
    if (!post) {
      throw new Error('Post não existe na base de dados');
    }
    try {
      await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));
      return post;
    } catch (e) {
      throw new Error('[ERR-002]: Por favor, contate o suporte');
    }
  }
}

export const drizzlePostRepository = new DrizzleRepository();
