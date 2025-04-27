import React from "react";
import cn from "../../../utils/style-merge";
import type { SidebarItemProps } from "./types";
import { NavLink } from "react-router";

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        cn(
          "border hover:border-pink-500 border-gray-700 text-gray-200",
          "cursor-pointer flex items-center gap-3 p-3 w-full rounded-md min-w-0",
          isActive ? "border-pink-500 bg-pink-900" : ""
        )
      }
    >
      {item.label}
    </NavLink>
  );
};

export default SidebarItem;
