import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export class App extends React.Component {
  state = {
    language: "it",
  };

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="it">Italiano</option>
          <option value="en">English</option>
          <option value="es">Español </option>
          <option value="ru">русский</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}
