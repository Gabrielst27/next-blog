import { resolve } from 'path';
import { PostModel } from '@/models/post.model';
import { IPostRepository } from './post.repository.interface';
import { readFile } from 'fs/promises';
import { simulateDelay } from '@/utils/simulate-delay';
import { DELAY_SIMULATION_MS } from '@/utils/constants';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, 'db', 'seed', 'posts.json');

export class InMemoryPostRepository implements IPostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const posts = parsedJson.posts;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findAllPublished(): Promise<PostModel[]> {
    await simulateDelay(DELAY_SIMULATION_MS);
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublished();
    const post = posts.find((post) => post.id === id);
    if (!post) throw new Error('Post não encontrado com o ID fornecido');
    return post;
  }

  async findPublishedBySlug(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublished();
    const post = posts.find((post) => post.slug === slug);
    if (!post) throw new Error('Post não encontrado com o slug fornecido');
    return post;
  }
}

export const inMemoryPostService: IPostRepository =
  new InMemoryPostRepository();
