import clsx from 'clsx';
import Link from 'next/link';

export function FooterComponent() {
  return (
    <footer className={clsx('flex items-center justify-center gap-1', 'p-6')}>
      <span>Copyright &copy; 2026</span>
      <Link href="/"> Next Blog</Link>
    </footer>
  );
}
