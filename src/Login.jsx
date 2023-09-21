import { useControlledForm } from "./UseControlledForm";

export function Login() {
  const { data, onInputChange, onLogin, isLoginDisabled } = useControlledForm();

  return (
    <div>
      <input
        name="username"
        value={data.username}
        onChange={onInputChange}
      ></input>
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={onInputChange}
      ></input>
      <button disabled={isLoginDisabled()} onClick={onLogin}>
        Login
      </button>
    </div>
  );
}
