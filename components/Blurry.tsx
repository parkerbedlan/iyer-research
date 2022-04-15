import React, { ReactNode } from "react";
import { useIsPageRendered } from "../hooks/useIsPageRendered";

type BlurryProps = {
  children: ReactNode;
  duration?: number;
};

export const Blurry: React.FC<BlurryProps> = ({ children, duration }) => {
  const isPageRendered = useIsPageRendered();
  return (
    <div
      className={`transition duration-${
        duration ? `[${duration}]` : "1000"
      } blur-lg ${isPageRendered && "blur-none"}`}
    >
      {children}
    </div>
  );
};
