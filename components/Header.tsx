import {
  ActionIcon,
  Drawer,
  DrawerProps,
  Header as MantineHeader,
} from "@mantine/core";
import { useElementSize, useHover } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Menu2 } from "tabler-icons-react";
import { useIsSmallScreen } from "../hooks/useIsSmallScreen";
import { Blurry } from "./Blurry";

type Link = {
  href: string;
  text: string;
  dropdownItems?: Link[];
};

const links: Link[] = [
  { href: "/", text: "Home" },
  { href: "/projects", text: "Projects" },
  {
    href: "/team",
    text: "Team",
    dropdownItems: [
      { href: "/team", text: "Current Team" },
      { href: "/alumni", text: "Alumni" },
    ],
  },
  { href: "/publications", text: "Publications" },
  { href: "/photos", text: "Lab Photos" },
];

type HeaderProps = { background?: string; message?: string };

export const Header: React.FC<HeaderProps> = ({ background, message }) => {
  useEffect(() => {
    // fetching for faster loading
    Promise.all([...Array(5)].map((_, i) => fetch(`/cell${i + 1}.jpg`)));
  }, []);

  const isSmallScreen = useIsSmallScreen();

  return (
    <MantineHeader height="100%">
      <NavBar />
      <Blurry>
        <div
          className={`bg-cover bg-fixed w-screen max-w-full flex justify-center items-center bg-center`}
          style={{
            height: isSmallScreen ? "13rem" : "24rem",
            backgroundImage: `url('${background || "/cell1.jpg"}')`,
          }}
        >
          {message && (
            <div className="flex justify-center items-center text-center bg-goodgray p-10">
              <h1 className="font-bold text-white text-6xl">{message}</h1>
            </div>
          )}
        </div>
      </Blurry>
    </MantineHeader>
  );
};

export const NavBar: React.FC<{}> = () => {
  const showHamburger = useIsSmallScreen();
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <div className="flex items-stretch space-between justify-between h-15 bg-black sticky top-0 z-20">
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
            my="auto"
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
        <div>
          <div className="flex items-center h-full">
            {links.map((link, i) => (
              <NavLink key={i} {...link} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink: React.FC<Link> = ({ text, href, dropdownItems }) => {
  const { hovered, ref } = useHover();
  return (
    <div
      ref={ref}
      className="text-white text-lg mx-6 transition-all ease-in-out duration-300 relative hover:text-2xl hover:opacity-50 h-full grid items-center"
    >
      <div className="m-auto">
        <NextLink href={href}>{text}</NextLink>
      </div>
      {dropdownItems && (
        <div
          className={`absolute -z-50 top-full flex flex-col space-y-3 mt-3 bg-black w-max ${
            hovered ? "-translate-y-3" : `-translate-y-[100vh]`
          }`} //transition-transform
        >
          {dropdownItems.map((item) => (
            <div key={item.href}>
              <NextLink href={item.href}>{item.text}</NextLink>
            </div>
          ))}
        </div>
      )}
    </div>
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
      setActualOpen(true);
    } else {
      const timeout = setTimeout(() => {
        setActualOpen(false);
      }, 400);
      return () => clearTimeout(timeout);
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
      onClose={onClose}
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
