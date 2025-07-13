import { Component, input, signal, effect } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-typing-text",
  standalone: true,
  imports: [CommonModule],
  template: `
    <p
      #p
      class="text-gray-700 mb-4 leading-relaxed"
      [textContent]="displayed()"
    ></p>
  `,
})
export class TypingText {
  readonly text = input.required<string>();
  readonly speed = input<number>(30);

  private readonly index = signal(0);
  readonly displayed = signal("");
  readonly finished = signal(false);

  constructor() {
    effect((onCleanup) => {
      const fullText = this.text();
      const ms = this.speed();

      this.index.set(0);
      this.displayed.set("");
      this.finished.set(false);

      const interval = setInterval(() => {
        const i = this.index();
        if (i < fullText.length) {
          this.displayed.set(fullText.slice(0, i + 1));
          this.index.update((v) => v + 1);
        } else {
          clearInterval(interval);
          this.finished.set(true);
        }
      }, ms);

      onCleanup(() => clearInterval(interval));
    });
  }
}
