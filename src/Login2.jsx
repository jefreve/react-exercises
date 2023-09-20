// Rewrite the Login component as a function component,

// and use the useState hook to track the state of the username,

// password and remember inputs.

// Tip: you can use useState more than once.

import React, { useState } from "react";

export function Login2() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInput(event) {
    const { name, type, value, checked } = event.target;

    setUser((data) => ({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleLogin() {
    console.log(user);
  }

  function handleReset() {
    setUser({
      username: "",
      password: "",
      remember: false,
    });
  }

  return (
    <div>
      <input name="username" value={user.username} onChange={handleInput} />
      <input
        name="password"
        type="password"
        value={user.password}
        onChange={handleInput}
      />
      <input
        name="remember"
        type="checkbox"
        checked={user.remember}
        onChange={handleInput}
      />
      {/* if either username or password is an empty string, 
      Login button is disabled */}
      <button onClick={handleLogin} disabled={!user.username || !user.password}>
        Login
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
