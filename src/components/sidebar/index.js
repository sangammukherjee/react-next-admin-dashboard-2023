"use client";

import { GlobalContext } from "@/context";
import { routes } from "@/utils";
import Link from "next/link";
import { useContext } from "react";
import { HiX } from "react-icons/hi";

export default function Sidebar() {
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext);

  return (
    <div
      className={`sm:none duration-200 fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 
    ${openSidebar ? "translate-x-0" : "-translate-x-96 xl:translate-x-0"}
    `}
    >
      <span
        onClick={() => setOpenSidebar(false)}
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
      >
        <HiX />
      </span>
      <div className="mx-[42px] mt-[50px] flex items-center">
        <div className="ml-1 mt-1 text-[20px] font-bold text-navy-700 dark:text-white">
          ADMIN DASHBOARD
        </div>
      </div>
      <ul className="mb-auto mt-20 pt-1">
        {routes.map((routeItem, index) => (
          <Link key={index} href={routeItem.layout}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li className="my-[3px] flex cursor-pointer items-center px-8">
                <span className="font-medium text-gray-600">
                  {routeItem.icon}
                </span>
                <p className="leading-1  text-[20px] ml-4 flex font-medium text-gray-600">
                  {routeItem.name}
                </p>
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
