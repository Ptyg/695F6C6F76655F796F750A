import React, { useState } from "react";
import ChevronIcon from "../icons/chevron";

const MainLayout: React.FC<{
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
}> = (props) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true)
  const toggleSidebar = () => setSidebarVisible((prev) => !prev)

  return (
    <div className="min-h-screen flex bg-gray-900">
      {isSidebarVisible && (
        <aside className="w-64 h-screen sticky top-0 shrink-0 border-r border-gray-700">{props.sidebar}</aside>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="sticky top-0 z-50 flex items-center justify-between px-2 py-4 w-full gap-4 border-b border-b-gray-700">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded hover:bg-gray-800 transition border border-gray-400 cursor-pointer"
          >
            <ChevronIcon
              className="text-gray-200"
              axis="y"
              direction={`${isSidebarVisible ? "left" : "right"}`}
            />
          </button>
          {props.header}
        </header>
        <main className="flex-1 overflow-y-auto p-4 bg-gray-800 transition-all duration-300">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
