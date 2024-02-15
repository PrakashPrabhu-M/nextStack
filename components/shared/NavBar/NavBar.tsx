"use client";
import React from "react";
import { useTheme } from "@/context/theme";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/foxy.svg";
import LightMode from "@/public/assets/light-mode.svg";
import DarkMode from "@/public/assets/dark-mode.svg";
import SystemMode from "@/public/assets/system-mode.svg";
// import { Button } from "@/components/ui/button";

// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

import themes from "@/constants/themes";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  // MenubarSeparator,
  // MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  // const router = useRouter();
  // const handleLogin = () => {
  //   router.push("/sign-in");
  // };

  return (
    <nav
      className="fixed z-10 flex w-screen items-center justify-between gap-5
    bg-light-900 p-4 dark:bg-dark-200 sm:p-6"
    >
      <Link href={"/"} className={`flex items-center gap-1 dark:invert`}>
        <Image
          className="hover:animate-spin"
          src={Logo}
          alt="logo"
          width={24}
          height={24}
          // sizes="(min-width:425px) 24px,18px"
        />
        <p className="h1-bold hidden px-1 text-cyan-600 sm:block">
          Over<span className="pl-2 text-primary-500">Share</span>
        </p>
      </Link>
      <GlobalSearch/>
      <div className="flex items-center justify-between gap-5">
        {/* <button className="btn" onClick={themeHandler}>
          Switch
        </button> */}

        <Menubar className="active-theme relative border-none">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">
              {theme === "light" ? (
                <Image src={LightMode} alt="light mode" width={24} />
              ) : theme === "dark" ? (
                <Image src={DarkMode} alt="dark mode" width={24} />
              ) : (
                <Image src={SystemMode} alt="default" width={24} />
              )}
            </MenubarTrigger>
            <MenubarContent className="absolute right-[-3rem] min-w-[120px]">
              {themes.map((item) => (
                <MenubarItem
                  key={item.value}
                  onClick={() => setTheme(item.value)}
                  className={`flex cursor-pointer items-center gap-4 dark:invert ${
                    item.value === theme && "bg-primary-500"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={`${item.label} icon`}
                    width={16}
                    height={16}
                  />
                  <p>{item.label}</p>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        {/* <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: "h-10 w-10" },
              variables: { colorPrimary: "#ff7000" },
            }}
          />
        </SignedIn>
        <SignedOut>
          <Button onClick={handleLogin} className="btn-secondary">
            Login
          </Button>
        </SignedOut> */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
