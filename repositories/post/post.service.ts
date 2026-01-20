import { resolve } from "path";
import { PostModel } from "../../models/post.model";
import { PostRepository } from "./post.repository";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, "db", "seed", "posts.json");

export class PostService implements PostRepository {
  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const posts = parsedJson.posts;
    return posts;
  }

  findAll(): Promise<PostModel[]> {
    const posts = this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);
    if (!post) throw new Error("Post não encontrado");
    return post;
  }
}

export const postService: PostRepository = new PostService();
