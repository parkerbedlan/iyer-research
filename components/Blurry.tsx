import React, { ReactNode, useEffect } from "react";
import { useIsPageRendered } from "../hooks/useIsPageRendered";

type BlurryProps = {
  children: ReactNode;
  duration?: number;
  blurLevel?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

export const Blurry: React.FC<BlurryProps> = ({
  children,
  duration,
  blurLevel,
}) => {
  const isPageRendered = useIsPageRendered();
  return (
    <div
      className={`transition duration-${duration ? `[${duration}]` : "1000"} ${
        !isPageRendered ? `blur-${blurLevel || "md"}` : "blur-none"
      }`}
    >
      {children}
      {/* to fix tailwind dev rendering */}
      {/* <div className="hidden blur-sm blur-md blur-none blur-3xl duration-1000" /> */}
    </div>
  );
};
