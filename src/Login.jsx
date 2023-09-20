import React, { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleLogin(event) {
    event.preventDefault();
    const username = event.target.parentElement.children.username.value;
    const password = event.target.parentElement.children.password.value;
    const remember = event.target.parentElement.children.remember.checked;

    const obj = { username: username, password: password, remember: remember };
    console.log(obj);
  }

  function handleInputChange(event) {
    const target = event.target;
    const { name, value, type, checked } = target;

    setData((data) => {
      return { ...data, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleReset() {
    setData({ username: "", password: "", remember: false });
  }

  return (
    <form>
      <input
        name="username"
        onChange={handleInputChange}
        value={data.username}
      />
      <input
        name="password"
        type="password"
        onChange={handleInputChange}
        value={data.password}
      />
      <input
        name="remember"
        type="checkbox"
        onChange={handleInputChange}
        checked={data.remember}
      />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
