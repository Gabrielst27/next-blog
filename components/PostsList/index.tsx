import clsx from 'clsx';
import { PostCoverImageComponent } from '../PostCoverImage';
import { PostSummaryComponent } from '../PostSummary';
import { PostModel } from '../../models/post.model';
import { PostComponent } from '../Post';

type Posts = {
  posts: PostModel[];
};

export async function PostsListComponent({ posts }: Posts) {
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
