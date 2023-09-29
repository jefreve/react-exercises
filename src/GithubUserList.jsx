import { useState } from "react";
import { GithubUser } from "./GithubUser";
import { ShowGithubUser } from "./ShowGithubUser";
import { Link } from "react-router-dom";

export function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState("");

  function handleInput(event) {
    setUserInput(event.target.value);
  }

  function handleAddUser() {
    if (userInput != "" && !users.includes(userInput)) {
      setUsers((prev) => [...prev, userInput]);
    }
  }

  return (
    <div>
      <input value={userInput} name="userInput" onChange={handleInput}></input>
      <button onClick={handleAddUser}>Add User</button>

      <ul style={{ listStyle: "none", paddingInlineStart: "0px" }}>
        {users.map((user, index) => {
          return (
            <li name="index" key={user + "-" + index}>
              <GithubUser username={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
