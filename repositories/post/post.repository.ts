import { PostModel } from "../../models/post.model";

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
}
