import clsx from "clsx";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header>
      <h1
        className={clsx(
          "font-extrabold p-8 text-4xl/tight text-center",
          "sm:text-5xl/tight",
          "md:text-6xl/tight",
          "lg:text-7xl/tight",
        )}
      >
        <Link href="#">Next Blog</Link>
      </h1>
    </header>
  );
}
