"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import Navigation from "@/globals/Navigation";
import { collapseTailwindClassName } from "@/utill/collapseTailwindClassName";
interface ContextType {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
}

const Context = createContext<ContextType | undefined>(undefined);

/**
 *
 * @constructor
 */
export const useLayout = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("Context must be used within an provider.");
  }
  return context;
};

/**
 * Provider
 * @param children
 * @constructor
 */
export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <Context.Provider
      value={{
        navOpen,
        setNavOpen,
      }}
    >
      <div className="fixed top-0 left-0 right-0 bg-white z-50 px-8 py-4 border-b border-gray-200 flex items-end gap-2">
        <h1 className="font-medium">Components</h1>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">v 0.1.0</span>
      </div>
      <div
        className={collapseTailwindClassName([
          "pt-[57px]",
          navOpen
            ? "translate-x-[200px] w-[calc(100%-200px)]"
            : "translate-x-0 w-full"
        ])}
      >
        {children}
      </div>
      <Navigation />
    </Context.Provider>
  );
};
