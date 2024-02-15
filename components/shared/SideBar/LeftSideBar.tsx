"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import navLinks from "@/constants/navLinks";
import { SignedOut } from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button";
import SignInIcon from "@/public/assets/sign-in.svg";
import SignUpIcon from "@/public/assets/sign-up.svg";

const LeftSideBar = () => {
  const pathName = usePathname();
  return (
    <section
      className="hidden h-screen flex-col
      justify-between gap-3 bg-light-800
    p-6 pt-36 dark:bg-dark-300 sm:flex lg:w-[266px]"
    >
      <div className="flex flex-col gap-4">
        {navLinks.map((item) => {
          const isActive = pathName.includes(item.url);
          return (
            <Link
              href={item.url}
              key={item.url}
              className={`flex items-center justify-start space-x-4 rounded-md p-4 ${
                isActive ? "bg-cyan-400 dark:bg-primary-500" : "dark:invert"
              }`}
            >
              <Image src={item.icon} alt={item.label} width={24} />
              <h1 className="hidden lg:block">{item.label}</h1>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col items-center gap-3">
          <Link
            href="sign-in"
            className={`flex w-full justify-evenly gap-4 ${buttonVariants({
              variant: "default",
            })} dark:invert`}
          >
            <Image
              src={SignInIcon}
              className="block lg:hidden"
              width={24}
              alt="sign-in"
            />
            <p className="hidden lg:block">Sign-in</p>
          </Link>
          <Link
            href="sign-up"
            className={`flex w-full justify-evenly gap-4 ${buttonVariants({
              variant: "default",
            })} dark:invert`}
          >
            <Image
              src={SignUpIcon}
              className="block lg:hidden"
              width={24}
              alt="sign-up"
            />
            <p className="hidden lg:block">Sign-up</p>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
