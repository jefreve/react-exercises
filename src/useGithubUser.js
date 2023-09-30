import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error } = useSWR(`https://api.github.com/users/${username}`);

  return { data, error };
}
