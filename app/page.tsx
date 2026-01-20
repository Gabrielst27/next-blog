import clsx from "clsx";
import HeaderComponent from "../components/header";
import { SpinnerComponent } from "../components/spinner";

export default async function HomePage() {
  return (
    <div>
      <SpinnerComponent containerClasses={clsx("h-20")} />
    </div>
  );
}
