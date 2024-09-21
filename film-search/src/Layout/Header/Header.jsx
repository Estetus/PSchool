import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles["header"]}>
      <img className={styles["header-logo"]} src="./logo.svg" alt="Логотип" />
      <ul className={styles["header-nav"]}>
        <li className={styles["header-nav__item"]}>Поиск фильмов</li>
        <li className={styles["header-nav__item"]}>Мои фильмы</li>
        <li className={styles["header-nav__item"]}>
          Войти
          <img
            className={styles["header-nav-item__img"]} src="./Login.svg" alt="Логотип"/>
        </li>
      </ul>
    </div>
  );
}

export default Header;
