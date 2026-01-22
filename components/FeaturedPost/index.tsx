import clsx from 'clsx';
import { PostCoverImageComponent } from '../PostCoverImage';
import { PostHeadingComponent } from '../PostHeading';
import { PostModel } from '../../models/post.model';

type PostProps = {
  post: PostModel;
};

export function FeaturedPost({ post }: PostProps) {
  return (
    <section className="grid grid-cols-1 gap-6">
      <h1
        className={clsx(
          'text-2xl font-bold text-center',
          'sm:text-3xl',
          'md:text-4xl',
        )}
      >
        Em destaque:
      </h1>
      <div
        className={clsx(
          'grid grid-cols-1 gap-8 mb-16 group',
          'sm:grid-cols-2',
          'rounded-2xl',
          'p-4',
        )}
      >
        <PostCoverImageComponent
          linkProps={{ href: `post/${post.slug}` }}
          imageProps={{
            width: 1200,
            height: 720,
            alt: post.title,
            src: post.coverImageUrl,
            priority: true,
          }}
        />

        <div className={clsx('flex flex-col gap-2 justify-center')}>
          <time className="text-slate-500 text-sm/tight" dateTime="2025-01-20">
            20/01/2026 19:32
          </time>

          <PostHeadingComponent url={`post/${post.slug}`}>
            {post.title}
          </PostHeadingComponent>

          <p>{post.excerpt}</p>
        </div>
      </div>
    </section>
  );
}
