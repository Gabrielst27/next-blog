import clsx from 'clsx';
import PostsListComponent from '../components/posts-list';
import { Suspense } from 'react';
import { SpinnerComponent } from '../components/spinner';
import { ContainerComponent } from '../components/container';
import HeaderComponent from '../components/header';
import { PostHeadingComponent } from '../components/post-heading';
import { PostCoverImageComponent } from '../components/post-cover-image';

export default async function HomePage() {
  return (
    <ContainerComponent>
      <HeaderComponent />

      <section
        className={clsx('grid grid-cols-1 gap-8 mb-16 group', 'sm:grid-cols-2')}
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
      </section>

      <Suspense fallback={<SpinnerComponent />}>
        <PostsListComponent />
      </Suspense>

      <footer className={clsx('flex', 'justify-center', 'p-10')}>FOOTER</footer>
    </ContainerComponent>
  );
}
