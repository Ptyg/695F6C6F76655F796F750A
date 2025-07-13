import {
  Component,
  input,
  AfterViewInit,
  ElementRef,
  viewChildren,
} from "@angular/core";

export interface TimelineEvent {
  title: string;
  description: string;
}

@Component({
  selector: "app-timeline",
  standalone: true,
  template: `
    <div class="timeline">
      <h2 class="text-2xl font-bold text-center mb-6" style="color:#ff6b6b">
        {{ title() }}
      </h2>

      @for (event of events(); track event.title; let i = $index) {
        <div class="timeline-item" #item>
          <div class="timeline-content">
            <h3 class="font-bold text-pink-600">{{ event.title }}</h3>
            <p class="text-sm">{{ event.description }}</p>
          </div>
        </div>
      }
    </div>
  `,
  styleUrl: "./timeline.scss",
})
export class Timeline implements AfterViewInit {
  title = input.required<string>();
  events = input.required<TimelineEvent[]>();

  private readonly items = viewChildren<ElementRef<HTMLDivElement>>("item");
  private readonly stagger = 500;

  ngAfterViewInit(): void {
    this.items().forEach((el, i) =>
      setTimeout(
        () => el.nativeElement.classList.add("show"),
        i * this.stagger,
      ),
    );
  }
}
