import ItemCard from "./components/item-card";
import { CONGRATULATIONS } from "./utils/consts";

const Congratulations = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {CONGRATULATIONS.map((i, idx) => (
        <ItemCard key={idx} {...i} className="min-w-[20rem] flex-1" />
      ))}
    </div>
  );
};

export default Congratulations;
