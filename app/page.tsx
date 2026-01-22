import clsx from 'clsx';
import { Suspense } from 'react';
import { SpinnerComponent } from '../components/Spinner';
import { ContainerComponent } from '../components/Container';
import { FeaturedPost } from '../components/FeaturedPost';
import { findAllPublishedPosts } from '../lib/posts/queries';
import { HeaderComponent } from '../components/Header';
import { PostsListComponent } from '../components/PostsList';

export default async function HomePage() {
  const posts = await findAllPublishedPosts();
  return (
    <section>
      <Suspense fallback={<SpinnerComponent />}>
        <FeaturedPost />
      </Suspense>

      <Suspense fallback={<SpinnerComponent />}>
        <PostsListComponent posts={posts} />
      </Suspense>
    </section>
  );
}
