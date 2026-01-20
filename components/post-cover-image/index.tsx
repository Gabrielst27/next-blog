import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export function PostCoverImageComponent() {
  return (
    <Link
      className={clsx("w-full h-full overflow-hidden rounded-2xl")}
      href="#"
    >
      <Image
        className={clsx(
          "w-full h-full object-center",
          "group-hover:scale-105 transition duration-300",
        )}
        src="/images/bryen_0.png"
        width={1200}
        height={720}
        alt="Título do post"
        priority
      ></Image>
    </Link>
  );
}
