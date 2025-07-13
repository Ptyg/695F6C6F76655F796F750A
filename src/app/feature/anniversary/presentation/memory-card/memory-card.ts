import { Component, input, signal } from "@angular/core";

export type PaletteName =
  | "pink-purple"
  | "blue-green"
  | "yellow-orange"
  | "purple-red";

export const PALETTES: Record<PaletteName, string> = {
  "pink-purple": "from-pink-200 to-purple-200",
  "blue-green": "from-blue-200 to-green-200",
  "yellow-orange": "from-yellow-200 to-orange-200",
  "purple-red": "from-purple-200 to-red-200",
};

@Component({
  selector: "app-memory-card",
  imports: [],
  template: `
    <div
      class="memory-card-wrapper h-40 rounded-lg cursor-pointer"
      [class.flipped]="flipped()"
    >
      <div class="memory-card">
        <div
          class="card-front bg-gradient-to-br h-full w-full flex items-center justify-center rounded-lg {{
            PALETTES[palette()]
          }}"
        >
          <ng-content select="[front]"></ng-content>
        </div>

        <div
          class="card-back bg-white p-4 h-full w-full flex items-center justify-center rounded-lg"
        >
          <ng-content select="[back]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrl: "./memory-card.scss",
})
export class MemoryCard {
  palette = input.required<PaletteName>();
  protected readonly PALETTES = PALETTES;
  protected readonly flipped = signal(false);
}
