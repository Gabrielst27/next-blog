'use client';

import clsx from 'clsx';
import {
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
  XIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  const navClasses = clsx(
    'bg-slate-800 text-slate-100 rounded-b-2xl',
    'flex flex-col px-8 mb-8 gap-2',
    'sm:flex-row sm:justify-start sm:flex-wrap sm:gap-12',
    !isOpen && 'h-10',
    !isOpen && 'overflow-hidden',
    'sm:overflow-visible sm:h-auto',
  );
  const linkClasses = clsx(
    '[&>svg]:w-4 [&>svg]:h-4 text-lg px-2',
    'flex items-center justify-start gap-2 cursor-pointer',
    'transition hover:bg-slate-700 rounded-lg',
    'h-10',
    'shrink-0',
  );
  const openCloseBtnClasses = clsx(
    linkClasses,
    'text-blue-200 italic',
    'sm:hidden',
  );

  return (
    <nav className={navClasses}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={openCloseBtnClasses}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <XIcon />
            Fechar
          </>
        )}
      </button>

      <a className={linkClasses} href="/">
        <HouseIcon />
        Home
      </a>
      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Admin
      </Link>
      <Link className={linkClasses} href="/admin/post/new-post">
        <PlusIcon />
        Novo Post
      </Link>
    </nav>
  );
}
