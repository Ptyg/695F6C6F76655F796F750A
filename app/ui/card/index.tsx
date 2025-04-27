import cn from "~/utils/style-merge";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = (props) => {
  return (
    <div className={cn(
      "rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg",
      "hover:border-pink-500 hover:shadow-pink-500/10",
      "hover:transform",
      props.className
    )}>
      {props.children}
    </div>
  );
};

export default Card;
