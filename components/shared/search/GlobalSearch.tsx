import Image from "next/image";
import React from "react";
import SearchIcon from "@/public/assets/search.svg";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="dark:dark-gradient relative hidden
    w-full max-w-[600px] space-x-2 rounded-xl bg-light-800 p-2 lg:flex">
      <Image src={SearchIcon} width={24} alt="search" />
      <Input
        type="text"
        placeholder="Global search"
        className="no-focus border-none bg-inherit text-light-400 dark:text-light-500"
      />
    </div>
  );
};

export default GlobalSearch;
