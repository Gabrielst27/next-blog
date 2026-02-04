import { ToastifyContainer } from '@/components/ToastifyContainer';
import clsx from 'clsx';
import { Sidebar } from 'lucide-react';
import Link from 'next/link';

export function HeaderComponent() {
  return (
    <header className="flex items-center justify-start gap-4 border-b p-4">
      <Link
        href="/"
        className={clsx(
          'font-extrabold text-4xl/tight',
          'sm:text-5xl/tight',
          'md:text-6xl/tight',
          'lg:text-7xl/tight',
        )}
      >
        <h1>Next Blog</h1>
      </Link>
      <ToastifyContainer />
    </header>
  );
}
