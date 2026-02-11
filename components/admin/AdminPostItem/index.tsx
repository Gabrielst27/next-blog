import { AdminDeletePostButton } from '@/components/admin/AdminDeletePostButton';
import { PostModel } from '@/models/post.model';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type AdminPostItemProps = {
  post: PostModel;
};

export function AdminPostItem({ post }: AdminPostItemProps) {
  return (
    <div
      className={clsx(
        'p-4 m-4 rounded-2xl bg-slate-800',
        'flex justify-between gap-8',
      )}
    >
      <Link
        className="flex gap-4 flex-1 min-w-0"
        href={`/admin/post/${post.id}`}
        aria-label={`Navegar para o post: ${post.title}`}
        title={`Navegar para o post: ${post.title}`}
      >
        <Image
          className="rounded-2xl sm:w-30 sm:h-20"
          src={post.coverImageUrl}
          alt={post.title}
          width={140}
          height={140}
        ></Image>
        <div
          className={clsx(
            'flex-1 overflow-hidden',
            'flex flex-col justify-center',
          )}
        >
          <h1 className="text-xl font-bold truncate">{post.title}</h1>
          {!post.published && (
            <span className="italic text-s">(Não publicado)</span>
          )}
        </div>
      </Link>
      <AdminDeletePostButton post={post} />
    </div>
  );
}
