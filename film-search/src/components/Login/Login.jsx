import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Login.module.css";
import Input from "../Input/Input";
import { UserContext } from "../../context/user.context";
import { useLocalStorage } from "../hooks/user-localStorage.hook";

function Login() {
  const [users, setUsers] = useLocalStorage("data", []);
  const [currentInput, setCurrentInput] = useState("");
  const { setLoggedUser } = useContext(UserContext);

  const inputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  useEffect(() => {
    if (users && users.length > 0) {
      const user = users.find((user) => user.isLogined);
      setLoggedUser(user || null);
    }
  }, [users, setLoggedUser]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!currentInput) return;
    const newUser = {
      name: currentInput,
      isLogined: true,
    };
    const updatedUsers = users.map((user) => ({
      ...user,
      isLogined: false,
    }));
    setUsers([...updatedUsers, newUser]);
    setLoggedUser(newUser);
    setCurrentInput("");
  };

  return (
    <div>
      <h2 className={styles["log-title"]}>Вход</h2>
      <form className={styles["main-text"]} onSubmit={handleLogin}>
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
