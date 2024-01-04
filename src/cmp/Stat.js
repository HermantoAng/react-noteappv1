import { useContext } from "react";
import ItemContext from "../ItemContext";

export default function Stats() {
  const { globalItem } = useContext(ItemContext);
  const itemNum = globalItem.length;
  const packedItem = globalItem.filter((d) => d.set).length;
  const percentage = Math.round((packedItem / itemNum) * 100);

  if (!itemNum) {
    return (
      <div className="min-h-[10vh] flex justify-center items-center bg-blue-900 text-gray-300 tracking-wide mt-2">
        <p>Add Some Item To Packing List.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[10vh] flex justify-center items-center bg-blue-900 text-gray-300 tracking-wide mt-2">
      <p>
        {percentage === 100
          ? "You Already Packed!"
          : `Current Item is ${itemNum} and finished packed item is ${packedItem} its
        ${percentage}% Completed.`}
      </p>
    </div>
  );
}
