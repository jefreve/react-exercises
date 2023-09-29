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
      {/* <Routes>
        <Route
          index
          element={
            <div>
              <p>
                Look for a user by adding <em>users/username</em> in the address
                bar
              </p>
              <p>
                For example:{" "}
                <strong>http://localhost:3000/users/visionmedia</strong>
              </p>
            </div>
          }
        />
        <Route
          path="/users"
          element={
            <div>
              <p>
                Look for a user by adding a <em>username</em> in the address bar
              </p>
              <p>
                For example:{" "}
                <strong>http://localhost:3000/users/visionmedia</strong>
              </p>
            </div>
          }
        />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes> */}
    </div>
  );
}
