import { DATE_TIMERS } from "./utils/consts";
import DateTimer from "./widgets/date-timer";

const HomePage = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {DATE_TIMERS.map(({ label, targetDate }, idx) => (
        <DateTimer
          key={idx}
          className="min-w-[20rem]"
          label={label}
          date={targetDate}
        />
      ))}
    </div>
  );
};

export default HomePage;
