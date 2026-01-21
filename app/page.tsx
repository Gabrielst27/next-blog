import clsx from 'clsx';
import PostsListComponent from '../components/posts-list';
import { Suspense } from 'react';
import { SpinnerComponent } from '../components/spinner';
import { ContainerComponent } from '../components/container';
import HeaderComponent from '../components/header';
import { FeaturedPost } from '../components/featured-post';

export default async function HomePage() {
  return (
    <ContainerComponent>
      <HeaderComponent />

      <FeaturedPost />

      <Suspense fallback={<SpinnerComponent />}>
        <PostsListComponent />
      </Suspense>

      <footer className={clsx('flex', 'justify-center', 'p-10')}>FOOTER</footer>
    </ContainerComponent>
  );
}
