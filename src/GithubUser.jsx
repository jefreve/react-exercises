import React, { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";
import { Link } from "react-router-dom";

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
        <div
          style={{ width: "200px", backgroundColor: "gray", color: "white" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>{data.name}</h3>{" "}
            <div>
              <Link to="/users">Back</Link>
            </div>
          </div>

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
