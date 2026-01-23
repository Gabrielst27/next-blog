import { Suspense } from 'react';
import { SpinnerComponent } from '../components/Spinner';
import { FeaturedPost } from '../components/FeaturedPost';
import { PostsListComponent } from '../components/PostsList';

export default async function HomePage() {
  return (
    <section className="m-4 p-4">
      <Suspense fallback={<SpinnerComponent />}>
        <FeaturedPost />
        <PostsListComponent />
      </Suspense>
    </section>
  );
}
