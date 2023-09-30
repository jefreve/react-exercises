import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error } = useGithubUser(username);

  return (
    <div>
      {/* <button onClick={getUserData}>Add user</button> */}
      {!data && !error && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>Error: "{error.message}"</p>}

      {data && !error && (
        <div>
          <h3>{data.name}</h3>
          <img
            style={{ marginBottom: "8px", display: "block" }}
            width="200px"
            height="200px"
            src={data.avatar_url}
            alt="profile"
          ></img>

          <a href={data.html_url} target="_blank" rel="noreferrer">
            Github URL
          </a>
        </div>
      )}
      <p>Data: {(data === null).toString()}</p>
    </div>
  );
}
