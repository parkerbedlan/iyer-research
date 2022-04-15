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
  useEffect(() => {
    // fetching for faster loading
    Promise.all([...Array(5)].map((_, i) => fetch(`/cell${i + 1}.jpg`)));
  }, []);

  const isLargerThanMid = useMediaQuery("(min-width: 48em)");

  const [showHamburger, setShowHamburger] = useState(false);
  useEffect(() => {
    setShowHamburger(!isLargerThanMid);
  }, [isLargerThanMid]);

  const [backgroundHeight, setBackgroundHeight] = useState("24rem");
  useEffect(() => {
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
            <div
              className={`border rounded-lg border-white m-2 p-2 transition hover:opacity-50 duration-300`}
            >
              <h1 className={`font-bold text-x text-white`}>Iyer Research</h1>
            </div>
          </NextLink>
          {showHamburger ? (
            <>
              <ActionIcon
                variant="outline"
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

  const [actualOpen, setActualOpen] = useState(opened);
  useEffect(() => {
    if (opened) {
      setActualOpen(opened);
    } else {
      const timeout = setTimeout(() => setActualOpen(opened), 1000);
      return clearTimeout(timeout);
    }
  }, [opened]);

  return (
    <Drawer
      position="right"
      title={<h1 className="font-bold text-xl">Pages</h1>}
      padding="lg"
      size="sm"
      transition="rotate-left"
      transitionTimingFunction="ease"
      transitionDuration={250}
      className={`animate-slideFromRight transition-transform duration-500 ${
        !opened && "translate-x-full"
      }`}
      opened={actualOpen}
      {...{ onClose }}
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
