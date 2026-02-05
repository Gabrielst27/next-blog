import { AdminPostContent } from '@/components/admin/AdminPostContent';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Suspense } from 'react';

type AdminSinglePostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminSinglePostPage({
  params,
}: AdminSinglePostPageProps) {
  return (
    <section>
      <Suspense fallback={<LoadingSpinner />}>
        <AdminPostContent params={params} />
      </Suspense>
    </section>
  );
}
