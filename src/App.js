import React from "react";
import { ShowGithubUser } from "./ShowGithubUser";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div>
      <Routes>
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
      </Routes>
    </div>
  );
}
