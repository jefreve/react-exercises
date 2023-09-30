import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error, isUsernameNull, onRefresh } = useGithubUser(username);

  return (
    <div>
      {/* this will show if username isn't null */}
      {!data && !error && !isUsernameNull && <p>Loading...</p>}

      {/* otherwise, if username is null, this will show */}
      {!data && !error && isUsernameNull && (
        <p>Username is null, thus no request was made.</p>
      )}
      {error && <p style={{ color: "red" }}>Error: "{error.message}"</p>}

      {data && !error && (
        <div>
          {/* the refresh button is visible only when the fetch is executed */}
          <button onClick={onRefresh}>Refresh</button>
          {/* User details  */}
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
    </div>
  );
}
