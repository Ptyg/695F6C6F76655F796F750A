import March8thPage from "~/pages/march-8th";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "March 8th" },
  ];
}

export default function March8th() {
  return <March8thPage />;
}
