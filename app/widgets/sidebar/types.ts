import type { Item } from "./item/types";

export type SidebarProps = {
  className?: string;
  header?: React.ReactNode;
  sidebarItems: Item[];
};

