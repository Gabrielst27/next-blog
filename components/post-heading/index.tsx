import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2" | "h3";
};

export function PostHeadingComponent({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClasses = {
    h1: clsx(
      "text-2xl/tight font-extrabold",
      "sm:text-3xl/tight",
      "md:text-4xl/tight",
    ),
    h2: clsx(
      "text-2xl/tight font-bold",
      "sm:text-3xl/tight",
      "md:text-4xl/tight",
    ),
    h3: clsx("text-2xl/tight", "sm:text-3xl/tight", "md:text-4xl/tight"),
  };
  return (
    <Tag className={headingClasses[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
