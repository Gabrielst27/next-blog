import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <section
      className={clsx(
        'h-full bg-slate-800',
        'my-16 mx-8 p-8 rounded-xl',
        'flex items-center justify-center flex-col gap-8',
      )}
    >
      <h1 className="text-7xl text-center">404</h1>
      <p>Erro 404 - página que você está tentando acessar não existe</p>
    </section>
  );
}
