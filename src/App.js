import React, { useState, useContext } from "react";
import { TodoList } from "./todoList";
import { LanguageContext } from "./LanguageContext";

export function App() {
  const [lang, setLang] = useState("en");

  function handleSelectChange(event) {
    setLang(event.target.value);
  }

  return (
    <div>
      <select value={lang} onChange={handleSelectChange}>
        <option value="en">ENGLISH</option>
        <option value="it">ITALIANO</option>
      </select>
      <LanguageContext.Provider value={lang}>
        <TodoList
          initialArray={[
            "Homework",
            "Project",
            "Night out",
            "Workout",
            "Play guitar",
          ]}
        />
      </LanguageContext.Provider>
    </div>
  );
}
