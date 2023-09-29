import React from "react";

import { Link, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link> | <Link to="/contacts">Contacts</Link> |{" "}
        <Link to="/about">About</Link>
      </div>

      <hr />

      <Routes>
        <Route path="/" element={<h3>Home</h3>} />
        <Route path="/contacts" element={<h3>Contacts</h3>} />
        <Route path="/about" element={<h3>About</h3>} />
      </Routes>
    </div>
  );
}
