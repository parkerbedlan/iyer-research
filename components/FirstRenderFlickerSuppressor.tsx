import { Loader } from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { useIsPageRendered } from "../hooks/useIsPageRendered";

type FirstRenderFlickerSuppressorProps = {
  bgColor?: string;
};

export const FirstRenderFlickerSuppressor: React.FC<
  FirstRenderFlickerSuppressorProps
> = ({}) => {
  const [scrollLocked, setScrollLocked] = useScrollLock(true);
  useEffect(() => {
    setScrollLocked(false);
  }, [setScrollLocked]);

  const rendered = useIsPageRendered();

  if (rendered) return null;
  return (
    <div className="absolute h-screen w-screen bg-gray-700 z-50 flex justify-center items-center">
      <Loader />
    </div>
  );
};
