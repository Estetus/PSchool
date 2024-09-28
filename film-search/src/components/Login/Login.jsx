import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Login.module.css";
import Input from "../Input/Input";

function Login({ onLogin }) {
  const [currentInput, setCurrentInput] = useState("");

  const inputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!currentInput) return;
      onLogin(currentInput); 
      setCurrentInput("");
  };

  return (
    <div>
      <h2 className={styles["log-title"]}>Вход</h2>
      <form className={styles["main-text"]} onSubmit={addItem}>
        <Input
          appearance="login"
          type="text"
          name="Имя пользователя"
          value={currentInput}
          onChange={inputChange}
          placeholder="Ваше имя"
        />

        <Button text="Войти в профиль" appearance="login" />
      </form>
    </div>
  );
}

export default Login;
