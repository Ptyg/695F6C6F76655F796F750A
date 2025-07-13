import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "february14",
    loadChildren: () =>
      import("./feature/february14/february14-module").then(
        (m) => m.February14Module,
      ),
  },
  {
    path: "march8",
    loadChildren: () =>
      import("./feature/march8/march8-module").then((m) => m.March8Module),
  },
  {
    path: "anniversary",
    loadChildren: () =>
      import("./feature/anniversary/anniversary-module").then(
        (m) => m.AnniversaryModule,
      ),
  },
  { path: "", redirectTo: "/february14", pathMatch: "full" },
];
