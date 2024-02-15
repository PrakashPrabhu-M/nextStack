import React from "react";
import NavBar from "@/components/shared/NavBar/NavBar";
import { ThemeProvider } from "@/context/theme";
import LeftSideBar from "@/components/shared/SideBar/LeftSideBar";
import RightSideBar from "@/components/shared/SideBar/RightSideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <main className="dynamic-bg relative">
        <NavBar />
        <div className="flex">
          <LeftSideBar />
          <section className="mx-auto min-h-screen w-full pt-[72px]
          md:pt-[90px] lg:pt-[104px]">
            {children}
          </section>
          <RightSideBar />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Layout;
