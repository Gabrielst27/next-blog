import { LoadingSpinner } from '@/components/LoadingSpinner';
import { PostsListAdmin } from '@/components/PostsListAdmin';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PostsListAdmin />
    </Suspense>
  );
}
