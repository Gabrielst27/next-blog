import clsx from 'clsx';
import { findAllPublicPostsCached } from '@/lib/posts/queries/public';
import { PostCoverImageComponent } from '@/components/PostItemCoverImage';
import { PostHeadingComponent } from '@/components/PostItemHeading';
import { formatDatetime } from '@/utils/format-datetime';

export async function FeaturedPost() {
  const posts = await findAllPublicPostsCached();
  const featuredPost = posts[0];
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
          linkProps={{ href: `post/${featuredPost.slug}` }}
          imageProps={{
            width: 1200,
            height: 720,
            alt: featuredPost.title,
            src: featuredPost.coverImageUrl,
            priority: true,
          }}
        />

        <div className={clsx('flex flex-col gap-2 justify-center')}>
          <time
            className="text-slate-500 text-sm/tight"
            dateTime={featuredPost.createdAt}
          >
            {formatDatetime(featuredPost.createdAt)}
          </time>

          <PostHeadingComponent url={`post/${featuredPost.slug}`}>
            {featuredPost.title}
          </PostHeadingComponent>

          <p>{featuredPost.excerpt}</p>
        </div>
      </div>
    </section>
  );
}
