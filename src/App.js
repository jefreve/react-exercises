import React from "react";
import { GithubUser } from "./GithubUser";
import { SWRConfig } from "swr/_internal";

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong with the request");
    }
    return response.json();
  });

export function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <GithubUser username="visionmedia" />
    </SWRConfig>
  );
}
