import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { March8Page } from "./presentation/march8-page/march8-page";

const routes: Routes = [{ path: "", component: March8Page }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class March8RoutingModule {}
