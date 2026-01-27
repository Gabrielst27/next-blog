import clsx from 'clsx';
import { findAllPublishedPostsCached } from '@/lib/posts/queries';
import { PostComponent } from '@/components/PostItem';

export async function PostsListComponent() {
  const posts = (await findAllPublishedPostsCached()).slice(1);
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
