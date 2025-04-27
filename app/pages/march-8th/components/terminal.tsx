import cn from "~/utils/style-merge";

const Terminal: React.FC<{
  children: React.ReactNode;
  className?: string
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "terminal-container bg-black p-6 rounded-lg shadow-xl border-2 w-[640px] h-[700px] overflow-y-auto scrollbar-thin transition-all duration-700",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Terminal;
