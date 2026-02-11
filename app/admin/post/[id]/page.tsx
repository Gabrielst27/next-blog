import { AdminPostContent } from '@/components/admin/AdminPostContent';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Editar post',
};

type AdminSinglePostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminSinglePostPage({
  params,
}: AdminSinglePostPageProps) {
  return (
    <section className="p-4 flex flex-col gap-8">
      <h1 className="text-xl text-center font-bold">Editar post</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <AdminPostContent params={params} />
      </Suspense>
    </section>
  );
}
