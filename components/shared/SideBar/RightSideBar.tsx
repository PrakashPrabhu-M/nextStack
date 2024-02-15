import React from "react";
import navLinks from "@/constants/navLinks";
import { Badge } from "@/components/ui/badge";

const RightSideBar = () => {
  return (
    <div
      className="hidden min-h-screen w-[550px]
    flex-col justify-evenly bg-light-800 p-6 pt-2
    dark:bg-dark-300 lg:flex"
    >
      <section className="flex flex-col gap-2">
        <h1 className="h2-semibold dark:text-light-800">Top questions</h1>
        {navLinks.map((item) => (
          <p className="body-medium dark:text-light-800" key={item.url}>
            {item.label}
          </p>
        ))}
      </section>
      <section className="flex flex-col gap-2">
        <h1 className="h2-semibold dark:text-light-800">Popular tags</h1>
        <div className="flex flex-wrap gap-4">
          {navLinks.map((item) => (
            <Badge
              className="subtle-medium cursor-pointer rounded-md border-none bg-light-700 px-4 py-2 uppercase"
              key={item.url}
            >
              <div className="flex justify-evenly gap-2">
                {item.label} <span>2</span>
              </div>
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RightSideBar;
