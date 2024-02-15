import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import searchIcon from "@/public/assets/search.svg";
import { cn } from "@/lib/utils";

interface Props {
  iconPosition: "left" | "right";
  placeholder: string;
  className?: string;
}

const LocalSearch = ({ iconPosition, placeholder, className }: Props) => {
  return (
    <div
      className={cn(
        `dark:dark-gradient flex h-14 items-center rounded-lg bg-light-800 p-4 `,
        className
      )}
    >
      {iconPosition === "left" && (
        <Image src={searchIcon} alt="search" width={24} />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        className="no-focus border-none bg-inherit
      text-light-400 dark:text-light-500"
      />
      {iconPosition === "right" && <Image src={searchIcon} alt="search" />}
    </div>
  );
};

export default LocalSearch;
