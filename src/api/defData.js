import { v4 as uuidv4 } from "uuid";

export const initialItem = [
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
