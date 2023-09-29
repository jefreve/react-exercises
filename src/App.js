import React from "react";
import { FilteredList } from "./FilteredList";

const people = [
  { id: "1", name: "Luca", age: "33" },
  { id: "2", name: "Maria", age: "21" },
  { id: "3", name: "Laura", age: "18" },
  { id: "4", name: "Lorenzo", age: "15" },
  { id: "5", name: "Anna", age: "25" },
  { id: "5", name: "Angelo", age: "17" },
];

export function App() {
  return (
    <div>
      <FilteredList list={people} />
    </div>
  );
}
