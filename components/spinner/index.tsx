import clsx from "clsx";

type SpinnnerContainerProps = {
  containerClasses?: string;
  spinnerClasses?: string;
};

export function SpinnerComponent({
  containerClasses = "",
  spinnerClasses = "",
}: SpinnnerContainerProps) {
  const spinnerProps = clsx(
    "min-w-10",
    "min-h-10",
    "border-5",
    "border-t-transparent",
    "border-slate-600",
    "rounded-full",
    "animate-spin",
    spinnerClasses,
  );

  const containerProps = clsx(
    "flex",
    "items-center",
    "justify-center",
    containerClasses,
  );

  return (
    <div className={containerProps}>
      <div className={spinnerProps}></div>
    </div>
  );
}
