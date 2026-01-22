import { PostSummaryDto } from '../../dtos/post-summary.dto';
import { formatDatetime } from '../../utils/format-datetime';
import { PostHeadingComponent } from '../PostHeading';

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
      <time className="text-slate-500" dateTime={createdAt}>
        {formatDatetime(createdAt)}
      </time>
      <PostHeadingComponent as={postHeading} url={postLink}>
        <p>{title}</p>
      </PostHeadingComponent>
      <p>{excerpt}</p>
    </div>
  );
}
