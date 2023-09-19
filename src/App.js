import React, { useState, useContext } from "react";
import { TodoList } from "./todoList";

import { LanguageContext } from "./LanguageContext";

export function App() {
  const [lang, setLang] = useState("en");
  const value = useContext(LanguageContext);

  function handleSelectChange(event) {
    setLang(event.target.value);
  }

  return (
    <div>
      <select value={lang} onChange={handleSelectChange}>
        <option value="en"></option>
        <option value="it"></option>
      </select>
      <value.Provider value={lang}>
        <TodoList
          initialArray={[
            "Homework",
            "Project",
            "Night out",
            "Workout",
            "Play guitar",
          ]}
        />
      </value.Provider>
    </div>
  );
}
