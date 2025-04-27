import { CiCalendar } from "react-icons/ci";
import { MdLabelImportantOutline } from "react-icons/md";
import type { Item } from "~/widgets/sidebar/item/types";

export const sidebarItems: Item[] = [
  {
    href: '/',
    label: (
    <>
      <CiCalendar className="text-2xl" />
      Key Dates
    </>
  ) },
  {
    href: '/congratulations',
    label: (
    <>
      <MdLabelImportantOutline className="text-2xl" />
      Congratulations
    </>
  ) },
] as const
