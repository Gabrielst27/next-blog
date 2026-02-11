import { findPublicPostBySlugCached } from '@/lib/posts/queries/public';
import { Metadata } from 'next';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Suspense } from 'react';
import { PostArticleComponent } from '@/components/PostArticle';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPublicPostBySlugCached(slug);
  return {
    title: post ? post.title : 'NotFound',
    description: post ? post.excerpt : 'NotFound',
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  return (
    <section className="m-6">
      <Suspense fallback={<LoadingSpinner />}>
        <PostArticleComponent params={params} />
      </Suspense>
    </section>
  );
}
