import clsx from 'clsx';
import Image from 'next/image';
import { findPostBySlugCached } from '@/lib/posts/queries';
import { notFound } from 'next/navigation';
import { PostHeadingComponent } from '@/components/PostItemHeading';
import { PostDateComponent } from '@/components/PostDate';
import { SafeMarkdownComponent } from '@/components/SafeMarkdown';

type PostArticleProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function PostArticleComponent({ params }: PostArticleProps) {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);
  if (!post) notFound();
  return (
    <article>
      <header
        className={clsx(
          'grid grid-cols-1 items-start gap-6',
          'sm:grid-cols-2',
          'mb-8',
          'text-center',
        )}
      >
        <Image
          className="rounded-2xl"
          width={720}
          height={1200}
          src={post.coverImageUrl}
          alt={post.title}
        />
        <div className="flex flex-col gap-6">
          <PostHeadingComponent url={post.slug}>
            {' '}
            {post.title}{' '}
          </PostHeadingComponent>
          <p>
            {post.author} | <PostDateComponent dateTime={post.createdAt} />
          </p>
        </div>
      </header>
      <section className="flex flex-col gap-6">
        <p className="text-xl">{post.excerpt}</p>
        <SafeMarkdownComponent markdown={post.content} />
        <p>
          Última atualização:{' '}
          <PostDateComponent dateTime={post.updatedAt} relative />
        </p>
      </section>
    </article>
  );
}
