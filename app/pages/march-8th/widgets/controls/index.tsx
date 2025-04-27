import cn from "~/utils/style-merge";
import useHeartService from "./use-heart-service";

const Controls: React.FC = () => {
  const useHeartServiceProps = useHeartService();

  return (
    <div className={cn(
      "flex flex-col items-center gap-6 bg-white/90 py-3 px-6 rounded-4xl shadow-lg",
      "backdrop-blur-sm border border-white/20",
      "transform transition-transform duration-300 hover:scale-105"
    )}>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={1}
          max={useHeartServiceProps.MAX_HEARTS}
          value={String(useHeartServiceProps.inputValue)}
          onChange={useHeartServiceProps.handleInputChange}
          className={cn(
            "bg-gray-800 text-green-400 px-3 py-2 rounded-lg border-2 w-32",
            "focus:outline-none focus:ring-2 focus:ring-pink-500",
            useHeartServiceProps.inputValue > useHeartServiceProps.WARNING_THRESHOLD 
              ? "border-red-400" 
              : "border-green-500"
          )}
        />
        <span className="text-green-400 text-sm font-medium">
          Max {useHeartServiceProps.MAX_HEARTS} {useHeartServiceProps.inputValue === useHeartServiceProps.MAX_HEARTS && "✓"}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-green-400 text-sm font-medium whitespace-nowrap">
          Endless Mode:
        </span>
        <label className="toggle-switch relative inline-block w-12 h-6">
          <input
            type="checkbox"
            checked={useHeartServiceProps.isEndless}
            onChange={() => useHeartServiceProps.setIsEndless((prev) => !prev)}
            className="sr-only peer"
          />
          <span className={cn(
            "toggle-slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all",
            "bg-gray-700 peer-checked:bg-pink-600",
            "before:content-[''] before:absolute before:left-1 before:bottom-1 before:h-4 before:w-4 before:rounded-full",
            "before:bg-green-400 before:transition-all peer-checked:before:translate-x-6"
          )}></span>
        </label>
      </div>
    </div>
  );
};

export default Controls;
