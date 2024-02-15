"use client";
import React from "react";
import MenuIcon from "@/public/assets/hamburger-menu.svg";
import Logo from "@/public/assets/foxy.svg";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import navLinks from "@/constants/navLinks";
import { SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

const NavContent = () => {
  const pathName = usePathname();
  return (
    <section className="flex flex-col gap-3 pt-16">
      {navLinks.map((item) => {
        const isActive = pathName.includes(item.url);
        return (
          <Link
            key={item.url}
            href={item.url}
            className={`flex gap-4 rounded-md p-4 ${
              isActive ? "bg-cyan-400 dark:bg-primary-500" : "dark:invert"
            }`}
          >
            <Image src={item.icon} alt={item.label} width={24} />
            <h1>{item.label}</h1>
          </Link>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={MenuIcon}
          className="cursor-pointer dark:invert sm:hidden"
          alt="menu"
          width={24}
        />
      </SheetTrigger>
      <SheetContent side="left" className="dynamic-bg overflow-y-auto border-none">
        <Link href={"/"} className={`flex items-center gap-1 dark:invert`}>
          <Image
            className="hover:animate-spin"
            src={Logo}
            alt="logo"
            width={24}
            height={24}
            // sizes="(min-width:425px) 24px,18px"
          />
          <p className="h1-bold px-1 text-cyan-600">
            Over<span className="pl-2 text-primary-500">Share</span>
          </p>
        </Link>
        <div className="flex flex-col justify-between gap-2">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SignedOut>
            <SheetClose asChild>
              <div className="flex flex-col gap-2">
                <Link
                  href="/sign-in"
                  className={`${buttonVariants({ variant: "outline" })} dark:invert`}
                >
                  Sign-in
                </Link>
                <Link
                  href="/sign-up"
                  className={`${buttonVariants({ variant: "default" })} dark:invert`}
                >
                  Sign-up
                </Link>
              </div>
            </SheetClose>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
