import cn from "~/utils/style-merge";

const Prompt: React.FC<{
  message: string;
  className?: string
  onClick?: () => void;
}> = ({ message, className, onClick }) => {
  return (
    <div
      className={cn(
        "font-mono text-green-400 animate-pulse mt-6 text-center cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {message}
    </div>
  );
}

export default Prompt;
