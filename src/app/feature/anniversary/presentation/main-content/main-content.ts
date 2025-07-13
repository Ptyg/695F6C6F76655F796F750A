import { Component } from "@angular/core";
import { MemoryCard } from "../memory-card/memory-card";
import { TypingText } from "../typing-text/typing-text";
import { Timeline, TimelineEvent } from "../timeline/timeline";
import { PromiseButton } from "../promise-button/promise-button";

@Component({
  selector: "app-main-content",
  imports: [MemoryCard, TypingText, Timeline, PromiseButton],
  templateUrl: "./main-content.html",
  styleUrl: "./main-content.scss",
})
export class MainContent {
  readonly message =
    "365 days, 8,760 hours, 525,600 minutes... and every single one has been better because you're in my life. You've taught me what true love feels like - the kind that makes ordinary moments extraordinary, that turns bad days into bearable ones, and good days into magical memories. Thank you for being my best friend, my partner in crime, my safe haven, and my greatest adventure.";

  readonly story: TimelineEvent[] = [
    {
      title: "Day 1 💕",
      description: "The day we met – my world changed forever",
    },
    { title: "First Date 🌹", description: "Nervous hearts, endless smiles" },
    {
      title: 'First "I Love You" 💖',
      description: "Three words that mean everything",
    },
    {
      title: "365 Days Later 🎉",
      description: "Every day better than the last",
    },
  ];
}
