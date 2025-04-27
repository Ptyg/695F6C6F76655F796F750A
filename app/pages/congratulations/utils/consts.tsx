import { FaHeart } from "react-icons/fa";
import { PiFlowerTulipDuotone } from "react-icons/pi";

export const CONGRATULATIONS = [
  {
    title: "March 8th",
    subtitle: "International Women's Day Celebration",
    icon: <PiFlowerTulipDuotone className="text-pink-500" />,
    to: '/march-8th'
  },
  {
    title: 'February 14th',
    subtitle: "Valentine's Day Celebration",
    icon: <FaHeart className="text-pink-500" />,
    to: '/february-14th'
  },
] as const
