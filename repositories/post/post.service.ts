import { resolve } from 'path';
import { PostModel } from '../../models/post.model';
import { PostRepository } from './post.repository';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, 'db', 'seed', 'posts.json');
const WAITING_SIMULATION_MS = 0;

export class PostService implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const posts = parsedJson.posts;
    return posts;
  }

  private async simulateWait() {
    if (WAITING_SIMULATION_MS <= 0) return;
    await new Promise((resolve) => setTimeout(resolve, WAITING_SIMULATION_MS));
  }

  async findAllPublished(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublished();
    const post = posts.find((post) => post.id === id);
    if (!post) throw new Error('Post não encontrado com o ID fornecido');
    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublished();
    const post = posts.find((post) => post.slug === slug);
    if (!post) throw new Error('Post não encontrado com o slug fornecido');
    return post;
  }
}

export const postService: PostRepository = new PostService();
