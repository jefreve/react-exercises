import React, { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error, onFetch } = useGithubUser();

  function getUserData() {
    onFetch(username);
  }

  useEffect(() => {
    getUserData();
  });

  return (
    <div>
      {/* <button onClick={getUserData}>Add user</button> */}
      {data && (
        <div>
          <h3>{data.name}</h3>
          <img
            style={{ marginBottom: "8px", display: "block" }}
            width="200px"
            height="200px"
            src={data.avatar_url}
            alt=""
          ></img>

          <a href={data.html_url} target="_blank" rel="noreferrer">
            Github URL
          </a>
        </div>
      )}
    </div>
  );
}
