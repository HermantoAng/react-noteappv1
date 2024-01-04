import { useState, createContext } from "react";
import ItemContext from "./ItemContext";
import { v4 as uuidv4 } from "uuid";

import Logo from "./cmp/Logo";
import Stats from "./cmp/Stat";
import ItemList from "./cmp/ItemList";
import Form from "./cmp/Form";
import Head from "./cmp/Head";

const initialItem = [
  {
    id: uuidv4(),
    item: "Kaus Kaki",
    quantitiy: 6,
    set: false,
  },
  {
    id: uuidv4(),
    item: "Baju",
    quantitiy: 10,
    set: false,
  },
  { id: uuidv4(), item: "Celana", quantitiy: 4, set: false },
  { id: uuidv4(), item: "Sepatu", quantitiy: 2, set: false },
];

export const checkBoxContext = createContext();

export default function App() {
  const [globalItem, setGlobalItem] = useState(initialItem);
  const value = { globalItem, setGlobalItem };
  const [checkboxView, setCheckboxView] = useState([]);

  return (
    <ItemContext.Provider value={value}>
      <div className="font-texts text-[20px]">
        <Logo />
        <Head />
        <Form />
        <checkBoxContext.Provider value={{ checkboxView, setCheckboxView }}>
          <ItemList />
        </checkBoxContext.Provider>

        <Stats />
      </div>
    </ItemContext.Provider>
  );
}
