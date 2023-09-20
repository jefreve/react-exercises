import React, { useState, useEffect } from "react";

const divStyle = {
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
  padding: "24px",
  fontSize: "20px",
};

const h3Style = { color: "#f40" };

const strongStyle = { color: "orange" };

//
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
    <div style={divStyle}>
      {error && <h3 style={h3Style}>{`There has been an "${error}"`}</h3>}
      {data && !error && (
        <div>
          <p>
            <strong style={strongStyle}>Name:</strong> {data.name}
          </p>
          <p>
            <strong style={strongStyle}>Username:</strong> {data.login}
          </p>
          <p>
            <strong style={strongStyle}>URL: </strong> {data.url}
          </p>

          <p>
            <strong style={strongStyle}>Avatar URL:</strong> {data.avatar_url}
          </p>
          <p>
            <strong style={strongStyle}>Repos:</strong> {data.repos_url}
          </p>
        </div>
      )}
    </div>
  );
}
