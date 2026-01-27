import { formatDatetime, formatRelativeDate } from '@/utils/format-datetime';

type PostDateProps = {
  dateTime: string;
  relative?: boolean;
};

export function PostDateComponent({
  dateTime,
  relative = false,
}: PostDateProps) {
  return (
    <time
      className="text-slate-500"
      dateTime={dateTime}
      title={relative ? formatRelativeDate(dateTime) : formatDatetime(dateTime)}
    >
      {relative ? formatRelativeDate(dateTime) : formatDatetime(dateTime)}
    </time>
  );
}
