export type Item = {
  isActive?: boolean;
  label: React.ReactNode;
  href: string
};

export type SidebarItemProps = {
  item: Item;
};
