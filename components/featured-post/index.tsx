import clsx from 'clsx';
import { PostCoverImageComponent } from '../post-cover-image';
import { PostHeadingComponent } from '../post-heading';

export function FeaturedPost() {
  return (
    <section className="grid grid-cols-1 gap-6">
      <h1 className={clsx('text-3xl font-bold text-center', 'sm:text-4xl')}>
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
          linkProps={{ href: 'google.com' }}
          imageProps={{
            width: 1200,
            height: 720,
            alt: 'Título do post',
            src: '/images/bryen_5.png',
            priority: true,
          }}
        />

        <div className={clsx('flex flex-col gap-2 justify-center')}>
          <time className="text-slate-600 text-sm/tight" dateTime="2025-01-20">
            20/01/2026 19:32
          </time>

          <PostHeadingComponent url="t.me" as="h2">
            Lorem ipsum dolor sit amet
          </PostHeadingComponent>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
