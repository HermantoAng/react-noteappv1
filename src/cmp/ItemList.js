import { useContext, useState } from "react";
import ItemContext from "../ItemContext";
import { checkBoxContext } from "../App";

export default function ItemList(props) {
  const { globalItem, setGlobalItem } = useContext(ItemContext);
  const { checkboxView, setCheckboxView } = useContext(checkBoxContext);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = globalItem;

  if (sortBy === "description")
    sortedItems = globalItem
      .slice()
      .sort((a, b) => a.item.localeCompare(b.item));

  if (sortBy === "set")
    sortedItems = globalItem
      .slice()
      .sort((a, b) => Number(a.set) - Number(b.set));

  console.log("SORTED", sortedItems);
  function handleDeleteItemListEvent(props) {
    // .filter jawabanya
    const filteredData = globalItem.filter((d) => d.id !== props.id);
    if (props.id === checkboxView.find((d) => d === props.id)) {
      const filteredCheckboxView = checkboxView.filter((d) => d !== props.id);
      setCheckboxView(filteredCheckboxView);
    }
    setGlobalItem(filteredData);

    // update globalItem diurutin ulang idnya supaya tidak ada bug
    console.log("delete ", props.id);
  }
  function handleCheckItemListEvent(props) {
    console.log(globalItem);
    if (props.set === true) {
      setCheckboxView([...checkboxView, props.id]);

      const filteredSetGlobalItem = globalItem.map((g) =>
        g.id === props.id && g.item === props.item
          ? { ...g, set: true }
          : { ...g }
      );
      console.log("SET :", filteredSetGlobalItem);
      setGlobalItem(filteredSetGlobalItem);
    } else if (props.set === false) {
      const filteredCheck = checkboxView.filter((d) => d !== props.id);

      setCheckboxView(filteredCheck);
      // console.log(filteredCheck);

      const filteredSetGlobalItem = globalItem.map((g) =>
        g.id === props.id && g.item === props.item
          ? { ...g, set: false }
          : { ...g }
      );
      setGlobalItem(filteredSetGlobalItem);
      console.log("SET :", filteredSetGlobalItem);
    }
  }
  function onClickClearList() {
    setGlobalItem([]);
    setCheckboxView([]);
  }
  if (!sortedItems.length) {
    return (
      <div className="flex justify-center min-h-[45vh] flex-row ">
        <div className="my-4">
          <h1>Filled The Item List Form First.</h1>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center min-h-[40vh] flex-row ">
        <div className="my-4">
          <h1>Item List</h1>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-2">
            {sortedItems.map(({ id, item, quantitiy, set }) => (
              <div
                key={id}
                className={`${
                  id === checkboxView.find((d) => d === id) && set === true
                    ? "relative group p-4 my-3 bg-green-300 rounded-md select-none hover:bg-gray-400 hover:translate-y-1 transition-all"
                    : "relative group p-4 my-3 bg-gray-400 rounded-md select-none hover:bg-gray-400 hover:translate-y-1 transition-all"
                }`}
              >
                <label>
                  {item} : {quantitiy}
                </label>
                <div className="flex justify-evenly items-center flex-row  absolute invisible group-hover:visible group-hover:bg-[rgba(0,0,0,0.5)] text-white w-full h-full top-0 left-0 rounded-md ">
                  <input
                    onClick={(e) =>
                      e.target.checked === true
                        ? handleCheckItemListEvent({
                            id: id,
                            item: item,
                            set: true,
                          })
                        : handleCheckItemListEvent({
                            id: id,
                            item: item,
                            set: false,
                          })
                    }
                    type="checkbox"
                    className="checkbox checkbox-accent checkbox-sm"
                  />
                  <label
                    onClick={() => handleDeleteItemListEvent({ id: id })}
                    className="text-6xl cursor-pointer "
                  >
                    &times;
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 items-center">
        <select
          className="select select-success w-38 max-w-xs"
          value={sortBy}
          onChange={(d) => setSortBy(d.target.value)}
        >
          <option value={"input"}>Filter By Default</option>
          <option value={"description"}>Filter by Name</option>
          <option value={"set"}>Filter By Checkbox</option>
        </select>
        <button onClick={() => onClickClearList()} className="btn btn-warning">
          Clear List
        </button>
      </div>
    </>
  );
}
