import { Component, output } from "@angular/core";

@Component({
  selector: "app-initial-screen",
  imports: [],
  templateUrl: "./initial-screen.html",
})
export class InitialScreen {
  readonly startJourney = output();
}
