import clsx from 'clsx';
import Image from 'next/image';
import { findPostBySlugCached } from '../../lib/posts/queries';
import { notFound } from 'next/navigation';

type SlugProp = {
  slug: string;
};

export async function PostSectionComponent({ slug }: SlugProp) {
  const post = await findPostBySlugCached(slug);
  if (!post) notFound();
  return (
    <section>
      <div
        className={clsx(
          'grid grid-cols-1 items-start gap-6',
          'sm:grid-cols-2',
          'mb-16',
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
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            {post.title}
          </h1>
          <h2>{post.excerpt}</h2>
        </div>
      </div>
      <p>{post.content}</p>
    </section>
  );
}
