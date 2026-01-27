import clsx from 'clsx';
import { PostModel } from '@/models/post.model';
import { PostCoverImageComponent } from '@/components/PostItemCoverImage';
import { PostSummaryComponent } from '@/components/PostItemSummary';

type PostProps = {
  post: PostModel;
};

export function PostComponent({ post }: PostProps) {
  const postLink = `/post/${post.slug}`;
  return (
    <div className={clsx('flex flex-col gap-4 group', 'hover:text-slate-400')}>
      <PostCoverImageComponent
        linkProps={{ href: postLink }}
        imageProps={{
          src: post.coverImageUrl,
          alt: post.title,
          width: 1200,
          height: 720,
        }}
      />

      <PostSummaryComponent
        title={post.title}
        slug={post.slug}
        createdAt={post.createdAt}
        excerpt={post.excerpt}
      />
    </div>
  );
}
