import { AdminPostItem } from '@/components/admin/AdminPostItem';
import { findAllPostsAdmin } from '@/lib/posts/queries/admin';
import { cacheLife, cacheTag } from 'next/cache';

export async function AdminPostsList() {
  'use cache';
  cacheTag('admin-posts-list');
  cacheLife('seconds');

  const posts = await findAllPostsAdmin();
  return (
    <div className="mb-16">
      {posts.map((post) => {
        return <AdminPostItem key={post.id} post={post} />;
      })}
    </div>
  );
}
