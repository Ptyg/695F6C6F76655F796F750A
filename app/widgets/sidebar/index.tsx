import React from "react";
import cn from "../../utils/style-merge";
import SidebarItem from "./item";
import type { SidebarProps } from "./types";

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <div className={cn("h-full p-4 flex flex-col gap-4", props.className)}>
      {props.header}

      <div className="flex-grow min-h-0 overflow-y-auto">
        <ul className="space-y-4">
          {props.sidebarItems.map((item, idx) => (
            <li key={idx}>
              <SidebarItem
                key={idx}
                item={item}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
