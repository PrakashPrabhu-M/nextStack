"use client";
import React, { useContext, createContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("light");

  const handleThemeChange = () => {
    if (theme === "system") {
      window.localStorage.removeItem("theme");
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", theme);
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", theme);
    }
  };

  useEffect(handleThemeChange, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context == null)
    throw new Error("useTheme must be used with a ThemeProvider");
  return context;
};
