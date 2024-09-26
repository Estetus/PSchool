import { useEffect, useState } from "react";
import { useLocalStorage } from "../../components/hooks/user-localStorage.hook";
import styles from "./Header.module.css";

function Header() {
  const [users, setUsers] = useLocalStorage("data");
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    if (users) {
      const user = users.find((user) => user.isLogined);
      setLoggedUser(user);
    }
  }, [users]);

  const handleLogout = () => {
    if (loggedUser) {
      const updateUser = users.map((user) => ({ ...user, isLogined: false }));
      setUsers(updateUser);
      setLoggedUser(null);
    }
  };

  return (
    <div className={styles["header"]}>
      <img className={styles["header-logo"]} src="./logo.svg" alt="Логотип" />
      <ul className={styles["header-nav"]}>
        <li className={styles["header-nav__item"]}>Поиск фильмов</li>
        <li className={styles["header-nav__item"]}>Мои фильмы</li>

        {loggedUser ? (
          <>
            <li className={styles["header-nav__item"]}>{loggedUser.name}</li>
            <img
              className={styles["header-logo"]}
              src="./User.svg"
              alt="Пользователь"
            />
            <li className={styles["header-nav__item"]} onClick={handleLogout}>
              Выйти
            </li>
          </>
        ) : (
          <li className={styles["header-nav__item"]}>
            Войти
            <img
              className={styles["header-nav-item__img"]}
              src="./Login.svg"
              alt="Логотип"
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
