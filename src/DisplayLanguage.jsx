import React from "react";
import { LanguageContext } from "./LanguageContext";

const WelcomeMessage = {
  it: "Benvenuto!",
  en: "Welcome!",
  es: "Bienvenido!",
  ru: "Привет!",
};

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <h1 style={{ marginTop: "16px" }}>{WelcomeMessage[language]}</h1>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
