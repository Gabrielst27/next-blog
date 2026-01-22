import clsx from 'clsx';
import { postService } from '../../repositories/post/post.service';
import { PostCoverImageComponent } from '../PostCoverImage';
import { PostHeadingComponent } from '../PostHeading';
import {
  formatDatetime,
  formatRelativeDate,
} from '../../utils/format-datetime';
import { PostSummaryComponent } from '../PostSummary';

export default async function PostsListComponent() {
  const posts = await postService.findAll();
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
