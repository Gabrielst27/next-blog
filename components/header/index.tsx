import clsx from 'clsx';
import Link from 'next/link';

export default function HeaderComponent() {
  return (
    <header>
      <h1
        className={clsx(
          'font-extrabold p-8 text-4xl/tight text-center',
          'sm:text-5xl/tight',
          'md:text-6xl/tight',
          'lg:text-7xl/tight',
        )}
      >
        <Link className="w-full h-full" href="#">
          <h1
            className={clsx(
              'hover:text-[38px] overflow-hidden',
              'sm:hover:text-[62px]',
            )}
          >
            Next Blog
          </h1>
        </Link>
      </h1>
    </header>
  );
}
