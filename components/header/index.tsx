"use client";

import clsx from "clsx";

export default function HeaderComponent() {
  return (
    <h1
      className={clsx(
        "text-xl font-bold",
        "text-blue-400",
        "hover:to-blue-50",
        "hover:bg-blue-800",
      )}
      onClick={() => {
        console.log("alert");
        alert(123);
      }}
    >
      Header
    </h1>
  );
}
