import { LoadingSpinner } from '@/components/LoadingSpinner';
import { AdminPostsList } from '@/components/admin/AdminPostsList';
import { AdminProtectedContent } from '@/components/admin/AdminProtectedContent';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
  return (
    <section>
      <Suspense fallback={<LoadingSpinner />}>
        <AdminProtectedContent>
          <AdminPostsList />
        </AdminProtectedContent>
      </Suspense>
    </section>
  );
}
