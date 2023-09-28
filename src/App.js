import React from "react";
import { Counter } from "./Counter";
import { Link, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
      <hr />
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}
