import { useState, useEffect } from "react";

export function useGithubUser() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchUserData(username) {
    setError(null);
    setLoading(true);
    //
    try {
      let response = await fetch(`https://api.github.com/users/${username}`);

      if (response.status !== 200) {
        setError(new Error("user not found"));
        setLoading(false);
      } else {
        let json = await response.json();

        setData(json);
      }

      setLoading(false);
    } catch (error) {
      setError(error);
      setData(null);
      setLoading(false);
    }
  }

  return { data, error, loading, onFetch: fetchUserData };
}
