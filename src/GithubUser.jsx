import React, { useState, useEffect } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function fetchData(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error("User not found"));
        }
        //
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    fetchData(username);
  }, [username]);

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        padding: "24px",
        fontSize: "20px",
      }}
    >
      {error && (
        <h3 style={{ color: "#f40" }}>{`There has been an "${error}"`}</h3>
      )}
      {data && !error && (
        <div>
          <p>
            <strong style={{ color: "orange" }}>Name:</strong> {data.name}
          </p>
          <p>
            <strong style={{ color: "orange" }}>Username:</strong> {data.login}
          </p>
          <p>
            <strong style={{ color: "orange" }}>URL: </strong> {data.url}
          </p>

          <p>
            <strong style={{ color: "orange" }}>Avatar URL:</strong>{" "}
            {data.avatar_url}
          </p>
          <p>
            <strong style={{ color: "orange" }}>Repos:</strong> {data.repos_url}
          </p>
        </div>
      )}
    </div>
  );
}
