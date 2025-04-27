import type { Route } from "./+types/home";
import CongratulationsPage from "~/pages/congratulations";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Congratulations" },
  ];
}

export default function Congratulations() {
  return <CongratulationsPage />;
}
