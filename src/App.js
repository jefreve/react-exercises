import React from "react";
import { GithubUserList } from "./GithubUserList";

//styles
const divStyle = {
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
  padding: "24px",
  fontSize: "20px",
};

// function
export function App() {
  return (
    <div style={divStyle}>
      <GithubUserList />
    </div>
  );
}
