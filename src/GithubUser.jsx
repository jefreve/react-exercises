import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error, onFetch } = useGithubUser();

  function getUserData() {
    onFetch(username);
  }

  return (
    <div>
      <button onClick={getUserData}>Add user</button>
      {data && <h3>{data.name}</h3>}
    </div>
  );
}
