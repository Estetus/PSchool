import { useState, useRef } from "react";
import Button from "../Button/Button";
import styles from "./Login.module.css";
import { useLocalStorage } from "../hooks/user-localStorage.hook";
import Input from "../Input/Input";

function Login() {
  const [inputData, setInputData] = useLocalStorage("data");
  const [currentInput, setCurrentInput] = useState("");

  const inputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const addItem = (i) => {
    i.preventDefault();
    const newUser = {
      name: currentInput,
      isLogined: true,
    };
    const updateUsers = inputData.map((user) => ({
      ...user,
      isLogined: false,
    }));

    setInputData([...updateUsers, newUser]);
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
