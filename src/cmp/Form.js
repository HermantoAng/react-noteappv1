import { useContext, useState } from "react";
import ItemContext from "../ItemContext";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const { globalItem, setGlobalItem } = useContext(ItemContext);

  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  function handleAddItemFormEvent(props) {
    if (props.name === "") {
      return;
    }

    const d = {
      id: uuidv4(),
      item: props.name,
      quantitiy: props.quantitiy,
      set: props.set,
    };
    const add = [...globalItem, d];
    console.log(add);
    setGlobalItem(add);
  }

  return (
    <div className="my-10 flex flex-row gap-2 justify-center items-center">
      <h1>Tambah Barang</h1>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Ketik Sesuatu"
          className="input input-bordered input-success w-full max-w-xs"
          onChange={(e) => setItemName(e.target.value)}
        />
        <select
          className="select select-success w-24 max-w-xs"
          onChange={(e) => setItemQuantity(e.target.value)}
        >
          {Array.from({ length: 99 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <button
          className="btn btn-warning p-2"
          onClick={() =>
            handleAddItemFormEvent({
              name: itemName,
              quantitiy: itemQuantity,
              set: false,
            })
          }
        >
          Tambah
        </button>
      </div>
    </div>
  );
}
