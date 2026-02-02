import clsx from 'clsx';
import { findAllPublicPostsCached } from '@/lib/posts/queries/public';
import { PostComponent } from '@/components/PostItem';

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
        return <PostComponent post={post} key={post.id} />;
      })}
    </section>
  );
}
