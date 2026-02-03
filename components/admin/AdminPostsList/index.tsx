import { AdminPostItem } from '@/components/admin/AdminPostItem';
import { findAllPostsAdmin } from '@/lib/posts/queries/admin';

export async function AdminPostsList() {
  const posts = await findAllPostsAdmin();
  return (
    <div className="mb-16">
      {posts.map((post) => {
        return <AdminPostItem key={post.id} post={post} />;
      })}
    </div>
  );
}
