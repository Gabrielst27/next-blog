import { AdminSinglePostContent } from '@/components/AdminSinglePostContent';
import { LoadingSpinnerComponent } from '@/components/LoadingSpinner';
import { Suspense } from 'react';

type AdminSinglePostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminSinglePostPage({
  params,
}: AdminSinglePostPageProps) {
  return (
    <Suspense fallback={<LoadingSpinnerComponent />}>
      <AdminSinglePostContent params={params} />
    </Suspense>
  );
}
