import { findAllPostsAdmin } from '@/lib/posts/queries/admin';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export async function PostsListAdmin() {
  const posts = await findAllPostsAdmin();
  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              'p-4 m-4 rounded-2xl bg-slate-800',
              'flex justify-between gap-8',
            )}
            key={post.id}
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
            <button
              className={clsx(
                'text-red-500 cursor-pointer',
                'hover:text-red-700 hover:scale-120 transition',
              )}
              aria-label={`Apagar post: ${post.title}`}
              title={`Apagar post: ${post.title}`}
            >
              <Trash2Icon />
            </button>
          </div>
        );
      })}
    </div>
  );
}
