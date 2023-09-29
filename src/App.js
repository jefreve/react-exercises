import React from "react";

import { Link, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link> | <Link to="/contacts">Contacts</Link> |{"  "}
        <Link to="/about">About</Link>
        <hr />
      </div>
      <Routes>
        <Route path="/" element={<h3>Index Page</h3>} />
        <Route path="/contacts" element={<h3>Contacts</h3>} />
        <Route path="/about" element={<h3>About</h3>} />
        <Route path="*" element={<p>404 | Not Found</p>} />
      </Routes>
    </div>
  );
}
