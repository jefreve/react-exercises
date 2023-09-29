import React from "react";
import { ShowGithubUser } from "./ShowGithubUser";
import { Link, Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";

export function App() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/users">Search Users</Link>
      <hr />
      <Routes>
        <Route path="/" element={<p>Index Page</p>} />
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<p>404 | Not Found</p>} />
      </Routes>
    </div>
  );
}
