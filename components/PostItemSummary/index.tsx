import { PostSummaryDto } from '../../dtos/post-summary.dto';
import { formatDatetime } from '../../utils/format-datetime';
import { PostDateComponent } from '../PostDate';
import { PostHeadingComponent } from '../PostItemHeading';

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
