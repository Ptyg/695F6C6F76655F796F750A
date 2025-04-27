import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layout/index.tsx", [
    index("routes/home.tsx"),
    route("congratulations", "routes/congratulations.tsx"),
  ]),
  route("march-8th", "routes/march-8th.tsx"),
  route("february-14th", "routes/february-14th.tsx"),
] satisfies RouteConfig;
