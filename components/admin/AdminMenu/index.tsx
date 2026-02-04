import clsx from 'clsx';
import { FileTextIcon, HouseIcon } from 'lucide-react';

export function AdminMenu() {
  const linkClasses = clsx(
    '[&>svg]:w-6',
    'flex items-center gap-2 justify-center',
  );
  return (
    <div className={clsx('p-3 bg-slate-800', 'rounded-bl-2xl rounded-br-2xl')}>
      <nav
        className={clsx(
          'flex justify-around',
          '[&_a]:hover:scale-120',
          '[&_a]:transition',
        )}
      >
        <a className={linkClasses} href="/">
          <HouseIcon />
          Início
        </a>
        <a className={linkClasses} href="/admin/post">
          <FileTextIcon />
          Admin
        </a>
        <a className={linkClasses} href="/admin/post">
          <FileTextIcon />
          Admin
        </a>
      </nav>
    </div>
  );
}
