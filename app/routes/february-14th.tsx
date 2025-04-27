import type { Route } from "./+types/home";
import February14ThPage from "~/pages/february-14th";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "February 14Th" },
  ];
}

export default function February14Th() {
  return <February14ThPage />;
}
