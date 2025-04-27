import { useEffect, useState } from "react";

export type CodeLine = {
  text: string;
  color: string;
  delay: number;
};

type DisplayedLine = {
  text: string;
  color: string;
};

const LINE_BREAK_PAUSE = 300;

const useTypewriter = (lines: readonly CodeLine[], onComplete: () => void) => {
  const [displayedLines, setDisplayedLines] = useState<DisplayedLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      onComplete();
      return;
    }

    const currentLine = lines[currentLineIndex];
    let timeoutDuration = currentLine.delay / currentLine.text.length;

    if (currentCharIndex === currentLine.text.length) {
      timeoutDuration = LINE_BREAK_PAUSE;
    }

    const timeout = setTimeout(() => {
      if (currentCharIndex < currentLine.text.length) {
        setDisplayedLines((prev) => {
          const currentText = (prev[currentLineIndex]?.text || "") + currentLine.text[currentCharIndex];
          const updated = [...prev];
          updated[currentLineIndex] = { text: currentText, color: currentLine.color };
          return updated;
        });
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    }, timeoutDuration);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentLineIndex, lines, onComplete]);

  return displayedLines;
};

export default useTypewriter;
