import { AdminSinglePostContent } from '@/components/AdminSinglePostContent';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Suspense } from 'react';

type AdminSinglePostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminSinglePostPage({
  params,
}: AdminSinglePostPageProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AdminSinglePostContent params={params} />
    </Suspense>
  );
}
