import clsx from 'clsx';
import PostsListComponent from '../components/PostsList';
import { Suspense } from 'react';
import { SpinnerComponent } from '../components/Spinner';
import { ContainerComponent } from '../components/Container';
import HeaderComponent from '../components/Header';
import { FeaturedPost } from '../components/FeaturedPost';

export default async function HomePage() {
  return (
    <ContainerComponent>
      <HeaderComponent />

      <Suspense fallback={<SpinnerComponent />}>
        <FeaturedPost />
      </Suspense>

      <Suspense fallback={<SpinnerComponent />}>
        <PostsListComponent />
      </Suspense>

      <footer className={clsx('flex', 'justify-center', 'p-10')}>FOOTER</footer>
    </ContainerComponent>
  );
}
