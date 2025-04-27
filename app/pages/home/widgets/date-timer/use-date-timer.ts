import { useEffect, useState } from "react";
import { calculateTimeDifference, formatTimeDifference } from "../../utils/stat";

const useDateTimer = (targetDate: Date) => {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const diff = calculateTimeDifference(targetDate);
      setFormattedTime(formatTimeDifference(diff));
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return formattedTime;
};

export default useDateTimer;
