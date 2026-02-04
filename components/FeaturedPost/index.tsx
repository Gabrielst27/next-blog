import clsx from 'clsx';
import { findAllPublicPostsCached } from '@/lib/posts/queries/public';
import { PostCoverImageComponent } from '@/components/PostItemCoverImage';
import { PostHeadingComponent } from '@/components/PostItemHeading';
import { formatDatetime } from '@/utils/format-datetime';
import { ErrorMessageComponent } from '@/components/ErrorMessage';

export async function FeaturedPost() {
  const posts = await findAllPublicPostsCached();
  if (posts.length <= 0) {
    return (
      <ErrorMessageComponent
        contentTitle="Oops..."
        content="Ainda não postamos nada nesta página."
      />
    );
  }
  const featuredPost = posts.length > 0 ? posts[0] : undefined;
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
      {featuredPost && (
        <div
          className={clsx(
            'grid grid-cols-1 gap-8 group',
            'sm:grid-cols-2',
            'rounded-2xl',
            'p-4 mb-16',
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
      )}
    </section>
  );
}
