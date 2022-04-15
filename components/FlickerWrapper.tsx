import Head from "next/head";
import React, { ReactNode, useEffect } from "react";

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
      {<NoPageFlicker />}
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
