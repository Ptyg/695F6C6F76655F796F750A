import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { February14Page } from "./presentation/february14-page/february14-page";

const routes: Routes = [{ path: "", component: February14Page }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class February14RoutingModule {}
