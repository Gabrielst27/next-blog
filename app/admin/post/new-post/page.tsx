import { AdminManagePostForm } from '@/components/admin/AdminManagePostForm';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { AdminProtectedContent } from '@/components/admin/AdminProtectedContent';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Criar post',
};

export default async function AdminNewPostPage() {
  return (
    <section className="p-4 flex flex-col gap-8">
      <h1 className="text-xl text-center font-bold">Criar Post</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <AdminProtectedContent>
          <AdminManagePostForm mode="create"></AdminManagePostForm>
        </AdminProtectedContent>
      </Suspense>
    </section>
  );
}
