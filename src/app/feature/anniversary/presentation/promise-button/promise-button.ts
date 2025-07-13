import { Component, input, signal } from "@angular/core";

@Component({
  selector: "app-promise-button",
  standalone: true,
  template: `
    <div class="text-center">
      <button
        (click)="show.set(true)"
        class="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full text-lg hover:from-pink-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
      >
        {{ title() }}
      </button>
    </div>

    @if (show()) {
      <div class="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
        <p class="text-center text-gray-700 italic">"{{ text() }}"</p>
      </div>
    }
  `,
  styleUrl: "./promise-button.scss",
})
export class PromiseButton {
  title = input.required<string>();
  text = input.required<string>();

  protected readonly show = signal(false);
}
