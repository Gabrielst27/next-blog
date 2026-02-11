import clsx from 'clsx';
import { findAllPublicPostsCached } from '@/lib/posts/queries/public';
import { PostItem } from '@/components/PostItem';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export async function PostsListComponent() {
  const posts = (await findAllPublicPostsCached()).slice(1);
  return (
    <section
      className={clsx(
        'grid grid-cols-1 gap-16',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
        'rounded-2xl',
        'p-4 mb-6',
      )}
    >
      {posts.map((post) => {
        return (
          <Suspense key={post.id} fallback={<LoadingSpinner />}>
            <PostItem post={post} />
          </Suspense>
        );
      })}
    </section>
  );
}
