"use client";

import { useEffect } from "react";

export function PostLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return <>{children}</>;
}
