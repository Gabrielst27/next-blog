import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImageComponent({
  imageProps,
  linkProps,
}: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full h-full',
        'overflow-hidden',
        'rounded-2xl',
        linkProps.className,
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          'w-full h-full object-center',
          'group-hover:scale-105 transition duration-300',
          imageProps.className,
        )}
      ></Image>
    </Link>
  );
}
