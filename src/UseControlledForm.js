import { useState } from "react";

export function useControlledForm() {
  const [data, setData] = useState({ username: "", password: "" });

  function onInputChange(event) {
    const { name, value } = event.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  function onLogin() {
    console.log(data);
  }

  function isLoginDisabled() {
    return !data.username || !data.password;
  }

  return { data, onInputChange, onLogin, isLoginDisabled };
}
