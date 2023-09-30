import useSWR from "swr";

export function useGithubUser(username) {
  let argument;
  let isUsernameNull;

  // if statement to check if username is null or not, and act differently depending on the result
  if (!username) {
    // if username is null, a null argument will be given to useSWR, so that no fetch request is made
    argument = null;
    // username is null, and we will inform the component using useGithubUser so that it can act accordingly
    isUsernameNull = true;
  } else {
    // if username isn't null, the fetch request will be made, so we will give the url to fetch to useSWR
    // remember that in the App file you passed the fetcher function to the SWRConfig component
    argument = `https://api.github.com/users/${username}`;

    // username isn't null, and we will inform the component using useGithubUser so that it can act accordingly
    isUsernameNull = false;
  }

  const { data, error, mutate } = useSWR(argument);
  // can't place useSWR (and hooks in general) inside of conditional expressions
  //that is why I handled a conditional expression before calling useSWR
  // and then assigned the correct argument to useSWR, depending on the result of the expression

  function handleRefreshUser() {
    // this function handles refetching the data
    mutate();
  }

  return { data, error, isUsernameNull, onRefresh: handleRefreshUser };
}
