import { findPostBySlugCached as findPostBySlugCached } from '@/lib/posts/queries';
import { Metadata } from 'next';
import { LoadingSpinnerComponent } from '@/components/LoadingSpinner';
import { Suspense } from 'react';
import { PostArticleComponent } from '@/components/PostArticle';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);
  return {
    title: post ? post.title : 'NotFound',
    description: post ? post.excerpt : 'NotFound',
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  return (
    <section className="m-6">
      <Suspense fallback={<LoadingSpinnerComponent />}>
        <PostArticleComponent slug={slug} />
      </Suspense>
    </section>
  );
}
