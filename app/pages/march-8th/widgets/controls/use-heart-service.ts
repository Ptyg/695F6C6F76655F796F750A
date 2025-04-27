import { useState } from "react";
import useHearts from "~/hooks/use-hearts";

const MAX_HEARTS = 30;
const WARNING_THRESHOLD = MAX_HEARTS * 0.8;

const useHeartService = () => {
  const [inputValue, setInputValue] = useState(5);
  const [isEndless, setIsEndless] = useState(false);
  const { useClickToSpawn, useEndlessHearts } = useHearts();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(Math.max(Number(e.target.value), 1), MAX_HEARTS);
    setInputValue(val);
  };

  if (!isEndless) useClickToSpawn(inputValue, MAX_HEARTS);
  else useEndlessHearts(inputValue, MAX_HEARTS);

  return {
    handleInputChange,
    setIsEndless,
    setInputValue,
    isEndless,
    inputValue,
    MAX_HEARTS,
    WARNING_THRESHOLD
  };
};

export default useHeartService;
