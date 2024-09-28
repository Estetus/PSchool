import styles from "./Header.module.css";

function Header({ loggedUser, onLogout }) {
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
            <li className={styles["header-nav__item"]} onClick={onLogout}>
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
