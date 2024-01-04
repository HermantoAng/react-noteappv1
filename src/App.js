import { useState, createContext } from "react";
import ItemContext from "./ItemContext";

import Logo from "./cmp/Logo";
import Stats from "./cmp/Stat";
import ItemList from "./cmp/ItemList";
import Form from "./cmp/Form";
import Head from "./cmp/Head";

import { initialItem } from "./api/defData";

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
