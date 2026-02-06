import { PostDateComponent } from '@/components/PostDate';
import { PostHeadingComponent } from '@/components/PostItemHeading';
import { PostSummaryDto } from '@/models/component-dtos/post-summary.dto';

export function PostSummaryComponent({
  slug,
  createdAt,
  title,
  excerpt,
  postHeading = 'h2',
}: PostSummaryDto) {
  const postLink = `/post/${slug}`;
  return (
    <div className="flex flex-col gap-2 sm:justify-center">
      <PostDateComponent dateTime={createdAt} />
      <PostHeadingComponent as={postHeading} url={postLink}>
        <p>{title}</p>
      </PostHeadingComponent>
      <p>{excerpt}</p>
    </div>
  );
}
