import React, { useState, useEffect } from "react";
import { GithubUser } from "./GithubUser";

//styles
document.body.style =
  "margin: 4px 0 0 0; background-color: black; height: 100%";
const ulStyle = {
  listStyle: "none",
  paddingInlineStart: "0px",
};
const h1Style = { color: "tomato" };

// function
export function GithubUserList() {
  const [userList, setUserList] = useState([]);

  const [userInputValue, setUserInputValue] = useState("");

  function handleInput(event) {
    setUserInputValue(event.target.value);
  }

  function handleAddUser(event) {
    const input = event.target.parentElement.querySelector("input");

    if (!userList.includes(input.value)) {
      const newUserList = [...userList, input.value];

      setUserList([...newUserList]);
    } else {
      alert("user already added");
    }
  }

  useEffect(() => {
    console.log(userList);
  }, [userList]);

  return (
    <div>
      <input name="user" onChange={handleInput} value={userInputValue} />
      <button onClick={handleAddUser}>Add User</button>
      <ul style={ulStyle}>
        {userList.length > 0 && <h1 style={h1Style}>Developers</h1>}
        {userList.length > 0 &&
          userList.map((user, index) => {
            return (
              <li key={user + "-" + index}>
                <GithubUser username={user} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
