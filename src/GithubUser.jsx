import React, { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error, loading, onFetch } = useGithubUser();

  function getUserData() {
    onFetch(username);
  }

  return (
    <div>
      <button onClick={getUserData}>Add user</button>
      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>Error: "{error.message}"</p>}

      {data && !loading && !error && (
        <div>
          <h3>{data.name}</h3>
          <img
            style={{ marginBottom: "8px", display: "block" }}
            width="200px"
            height="200px"
            src={data.avatar_url}
            alt="profile picture"
          ></img>

          <a href={data.html_url} target="_blank">
            Github URL
          </a>
        </div>
      )}
    </div>
  );
}
