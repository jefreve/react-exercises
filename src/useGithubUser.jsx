import { useState, useEffect } from "react";

export function useGithubUser() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchUserData(username) {
    setError(null);
    //
    try {
      let response = await fetch(`https://api.github.com/users/${username}`);

      if (response.status !== 200) {
        setError(new Error("user not found"));
      }

      let json = await response.json();

      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    }
  }

  return { data, error, onFetch: fetchUserData };
}
