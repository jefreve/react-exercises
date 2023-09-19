import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const languages = {
  en: ["Delete", "Add Todo", "Reset"],
  it: ["Rimuovi", "Aggiungi Compito", "Resetta"],
};

export function TodoList({ initialArray = [] }) {
  const [items, setItems] = useState(initialArray);
  const langContext = useContext(LanguageContext);

  function deleteTodo(event) {
    const index = event.target.name;

    items.splice(index, 1);
    const newItems = [...items];

    setItems(newItems);
  }

  function addTodo(event) {
    const input = event.target.parentElement.querySelector(
      "[name='inputField']"
    );

    const value = input.value;

    if (value) {
      const newItems = [...items, value];
      setItems(newItems);
      input.value = "";
    }
  }

  function resetItems() {
    setItems([]);
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={item + "-" + index + 1} id={index}>
              {`Todo N.${index + 1}: ${item}`}
              <button onClick={deleteTodo} name={index}>
                {languages[langContext][0]}
              </button>
            </li>
          );
        })}
      </ul>
      <input name="inputField" type="text" />
      <button onClick={addTodo}>{languages[langContext][1]}</button>
      <button onClick={resetItems}>{languages[langContext][2]}</button>
    </div>
  );
}
