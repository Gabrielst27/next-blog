import clsx from "clsx";
import PostsListComponent from "../components/posts-list";
import { Suspense } from "react";
import { SpinnerComponent } from "../components/spinner";
import { ContainerComponent } from "../components/container";

export default async function HomePage() {
  return (
    <ContainerComponent>
      <header
        className={clsx(
          "font-extrabold",
          "flex",
          "justify-center",
          "items-center",
          "p-8",
          "text-3xl",
          "text-center",
        )}
      >
        AQUI É O HEADER
      </header>
      <Suspense fallback={<SpinnerComponent />}>
        <PostsListComponent />
      </Suspense>
      <footer className={clsx("flex", "justify-center", "p-10")}>FOOTER</footer>
    </ContainerComponent>
  );
}
