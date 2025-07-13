import { Component, signal } from "@angular/core";
import { InitialScreen } from "../initial-screen/initial-screen";
import { MainContent } from "../main-content/main-content";

@Component({
  selector: "app-anniversary-page",
  standalone: true,
  imports: [InitialScreen, MainContent],
  templateUrl: "./anniversary-page.html",
  styleUrl: "./anniversary-page.scss",
})
export class AnniversaryPage {
  started = signal(false);

  showMainContent() {
    this.started.set(true);
  }
}
