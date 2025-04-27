import cn from "~/utils/style-merge";
import useTypewriter, { type CodeLine } from "./use-typewriter";

const CodeDisplay: React.FC<{
  texts: readonly CodeLine[];
  onComplete: () => void;
  className?: string
}> = ({ texts, onComplete, className }) => {
  const displayedLines = useTypewriter(texts, onComplete);

  return (
    <div
      className={cn(
        "font-mono whitespace-pre-wrap text-sm",
        className
      )}
    >
      <div className="text-center mb-4 opacity-70">
        ❤ LOVE OS v1.0.0 ❤
      </div>

      {displayedLines.map((line, index) => (
        <div key={index} style={{ color: line.color }}>
          {line.text}
        </div>
      ))}
    </div>
  );
};

export default CodeDisplay;
