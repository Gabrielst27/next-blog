import clsx from 'clsx';
import { postService } from '../../repositories/post/post.service';
import { PostCoverImageComponent } from '../PostCoverImage';
import { PostHeadingComponent } from '../PostHeading';
import {
  formatDatetime,
  formatRelativeDate,
} from '../../utils/format-datetime';

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
            <div className="flex flex-col gap-2">
              <time className="text-slate-500" dateTime={post.updatedAt}>
                {formatDatetime(post.updatedAt)}
              </time>
              <PostHeadingComponent url={postLink}>
                <p>{post.title}</p>
              </PostHeadingComponent>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
