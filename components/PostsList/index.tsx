import clsx from 'clsx';
import { PostCoverImageComponent } from '../PostCoverImage';
import { PostSummaryComponent } from '../PostSummary';
import { PostModel } from '../../models/post.model';

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
        'p-4',
      )}
    >
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div
            className={clsx(
              'flex flex-col gap-4 group',
              'hover:text-slate-400',
            )}
            key={post.id}
          >
            <PostCoverImageComponent
              linkProps={{ href: postLink }}
              imageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                width: 1200,
                height: 720,
              }}
            />

            <PostSummaryComponent
              title={post.title}
              slug={post.slug}
              createdAt={post.createdAt}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </section>
  );
}
