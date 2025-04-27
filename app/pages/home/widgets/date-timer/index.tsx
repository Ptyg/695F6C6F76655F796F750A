import Card from "~/ui/card";
import cn from "../../../../utils/style-merge";
import useDateTimer from "./use-date-timer";

const DateTimer: React.FC<{
  label: string;
  date: Date;
  className?: string
}> = ({ label, date, className }) => {
  const formattedTime = useDateTimer(date);

  return (
    <Card className={cn("space-y-2", className)}>
      <h3 className="text-pink-400 text-lg font-semibold capitalize">{label}</h3>
      <div className="text-purple-300 text-2xl font-mono whitespace-nowrap overflow-hidden text-ellipsis">{formattedTime}</div>
      <p className="text-gray-500 text-xs">{date.toLocaleDateString()}</p>
    </Card>
  );
};

export default DateTimer;