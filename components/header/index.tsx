import clsx from 'clsx';
import Link from 'next/link';

export function HeaderComponent() {
  return (
    <header className="border-b p-4">
      <Link
        href="/"
        className={clsx(
          'font-extrabold text-4xl/tight text-center',
          'sm:text-5xl/tight',
          'md:text-6xl/tight',
          'lg:text-7xl/tight',
        )}
      >
        <h1>Next Blog</h1>
      </Link>
    </header>
  );
}
