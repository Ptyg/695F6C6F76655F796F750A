import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnniversaryPage } from "./presentation/anniversary-page/anniversary-page";

const routes: Routes = [{ path: "", component: AnniversaryPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnniversaryRoutingModule {}
