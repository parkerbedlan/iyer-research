import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  background?: string;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  background,
}) => {
  return (
    <>
      <Head>
        <title>{`Iyer Research Lab${title ? ` - ${title}` : ""}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header background={background} />
      <div className="bg-gray-100">{children}</div>
      <Footer />
    </>
  );
};
