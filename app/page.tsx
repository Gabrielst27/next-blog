import { Suspense } from 'react';
import { SpinnerComponent } from '../components/Spinner';
import { FeaturedPost } from '../components/FeaturedPost';
import { findAllPublishedPosts } from '../lib/posts/queries';
import { PostsListComponent } from '../components/PostsList';

export default async function HomePage() {
  const posts = await findAllPublishedPosts();
  return (
    <section className="m-4 p-4">
      <Suspense fallback={<SpinnerComponent />}>
        <FeaturedPost post={posts[0]} />
      </Suspense>

      <Suspense fallback={<SpinnerComponent />}>
        <PostsListComponent posts={posts.slice(1)} />
      </Suspense>
    </section>
  );
}
