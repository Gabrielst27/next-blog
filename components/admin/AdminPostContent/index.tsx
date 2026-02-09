import { AdminManagePostForm } from '@/components/admin/AdminManagePostForm';
import { makePublicPostFromPostModel } from '@/dto/post/public-post.dto';
import { findPostByIdAdminCached } from '@/lib/posts/queries/admin';
import { formatLog } from '@/utils/format-log';
import { notFound } from 'next/navigation';

type AdminPostContentProps = {
  params: Promise<{ id: string }>;
};

export async function AdminPostContent({ params }: AdminPostContentProps) {
  const { id } = await params;
  const post = await findPostByIdAdminCached(id).catch();
  if (!post) notFound();
  const publicPost = makePublicPostFromPostModel(post);
  return (
    <div>
      <AdminManagePostForm publicPost={publicPost} />
    </div>
  );
}
