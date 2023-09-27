import React from "react";
import { useLanguage } from "./LanguageContext";

const WelcomeMessage = {
  it: "Benvenuto/a!",
  en: "Welcome!",
  es: "Bienvenido/a!",
  ru: "Привет!",
};

export function DisplayLanguage() {
  const language = useLanguage();

  return (
    <div>
      <h3>{WelcomeMessage[language]}</h3>
    </div>
  );
}
