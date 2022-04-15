import { Loader } from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";
import Head from "next/head";
import React, { ReactNode, useEffect } from "react";
import { useIsPageRendered } from "../hooks/useIsPageRendered";

type FlickerWrapperProps = {
  children: ReactNode;
};

export const FlickerWrapper: React.FC<FlickerWrapperProps> = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      document.documentElement.classList.add("blitz-first-render-complete");
    });
  }, []);
  return (
    <>
      <NoPageFlicker />
      <FirstRenderFlickerSuppressor />
      {children}
    </>
  );
};

const customCSS = `
  body::before {
    content: "";
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
    background-color: rgb(31 41 55);
  }

  .blitz-first-render-complete body::before {
    display: none;
  }
`;
const noscriptCSS = `
  body::before {
    content: none
  }
`;

export const NoPageFlicker = () => {
  return (
    <Head>
      <style dangerouslySetInnerHTML={{ __html: customCSS }} />
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: noscriptCSS }} />
      </noscript>
    </Head>
  );
};

const FirstRenderFlickerSuppressor: React.FC<{}> = ({}) => {
  const [scrollLocked, setScrollLocked] = useScrollLock(true);
  useEffect(() => {
    setScrollLocked(false);
  }, [setScrollLocked]);

  const rendered = useIsPageRendered();

  if (rendered) return null;
  return (
    <div className="absolute h-screen w-screen bg-gray-800 z-50 flex justify-center items-center">
      <Loader />
    </div>
  );
};
