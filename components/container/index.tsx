import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
};

export function ContainerComponent({ children }: ContainerProps) {
  return (
    <div
      className={clsx('min-h-screen', 'text-slate-900', 'dark:text-slate-200')}
    >
      <div className={clsx('max-w-280', 'xl:max-w-7xl', 'mx-auto')}>
        {children}
      </div>
    </div>
  );
}
