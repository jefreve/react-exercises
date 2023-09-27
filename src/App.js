import React, { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageProvider } from "./LanguageContext";

export function App() {
  const [language, setLanguage] = useState("it");

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="it">Italiano</option>
        <option value="en">English</option>
        <option value="es">Español </option>
        <option value="ru">русский</option>
      </select>

      <LanguageProvider value={language}>
        <DisplayLanguage />
      </LanguageProvider>
    </div>
  );
}
