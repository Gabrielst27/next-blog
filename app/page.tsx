import { Suspense } from 'react';
import { FeaturedPost } from '@/components/FeaturedPost';
import { PostsListComponent } from '@/components/PostsList';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default async function HomePage() {
  return (
    <section className="m-4 p-4">
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedPost />
        <PostsListComponent />
      </Suspense>
    </section>
  );
}
