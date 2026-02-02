import { findAllPostsAdmin } from '@/lib/posts/queries/admin';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
  const posts = await findAllPostsAdmin();
  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
