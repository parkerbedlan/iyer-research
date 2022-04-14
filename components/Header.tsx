import {
  ActionIcon,
  Drawer,
  DrawerProps,
  Header as MantineHeader,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Menu2 } from "tabler-icons-react";

const links = [
  { href: "/", text: "Home" },
  { href: "/projects", text: "Projects" },
  { href: "/team", text: "Team" },
  { href: "/publications", text: "Publications" },
  { href: "/photos", text: "Lab Photos" },
];

type HeaderProps = { background?: string };

export const Header: React.FC<HeaderProps> = ({ background }) => {
  const isLargerThanMid = useMediaQuery("(min-width: 48em)");

  const [showHamburger, setShowHamburger] = useState(false);
  useEffect(() => {
    setShowHamburger(!isLargerThanMid);
  }, [isLargerThanMid]);

  const [backgroundHeight, setBackgroundHeight] = useState("24rem");
  useEffect(() => {
    // setBackgroundHeight(isLargerThanMid ? 96 : 52);
    setBackgroundHeight(isLargerThanMid ? "24rem" : "13rem");
  }, [isLargerThanMid]);

  const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <MantineHeader height="100%">
      <div
        className={`bg-cover w-screen max-w-full`}
        style={{
          height: backgroundHeight,
          backgroundImage: `url('/${background || "cell1"}.jpg')`,
        }}
      >
        <div className="flex items-center space-between justify-between h-15 bg-black">
          <NextLink href="/">
            <div className="border rounded-lg border-white m-2 p-2 hover:opacity-50 ease-in-out duration-300">
              <h1 className={`font-bold text-x text-white`}>Iyer Research</h1>
            </div>
          </NextLink>
          {showHamburger ? (
            <>
              <ActionIcon
                variant="outline"
                color="white"
                size="xl"
                mx=".5rem"
                onClick={() => setDrawerOpened(true)}
              >
                <Menu2 color="white" />
              </ActionIcon>
              <NavDrawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
              />
            </>
          ) : (
            <div className="flex items-center">
              {links.map((link, i) => (
                <NavLink key={i} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* These hidden divs exist so that the backgrounds load faster. */}
      <div className="bg-cell1 hidden" />
      <div className="bg-cell2 hidden" />
      <div className="bg-cell3 hidden" />
      <div className="bg-cell4 hidden" />
      <div className="bg-cell5 hidden" />
    </MantineHeader>
  );
};

const NavLink: React.FC<{ text: string; href: string }> = ({ text, href }) => {
  return (
    <h2 className="text-white text-lg mx-6 hover:opacity-50 transition-all ease-in-out duration-300 hover:text-2xl">
      <NextLink href={href}>{text}</NextLink>
    </h2>
  );
};

const NavDrawer: React.FC<{
  onClose: DrawerProps["onClose"];
  opened: DrawerProps["opened"];
}> = ({ onClose, opened }) => {
  const { pathname } = useRouter();
  return (
    <Drawer
      position="right"
      title={<h1 className="font-bold text-xl">Pages</h1>}
      padding="lg"
      size="sm"
      // color="black"
      {...{ onClose, opened }}
    >
      <div className="flex flex-col">
        {links.map(({ href, text }, i) => (
          <NextLink
            key={i}
            href={href}
            onClick={href === pathname ? onClose : undefined}
          >
            <h2 className="text-xl my-2 focus:text-white active:text-white hover:text-white">
              {text}
            </h2>
          </NextLink>
        ))}
      </div>
    </Drawer>
  );
};
