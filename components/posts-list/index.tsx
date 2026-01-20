import { postService } from "../../repositories/post/post.service";

export default async function PostsListComponent() {
  const posts = await postService.findAll();
  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
