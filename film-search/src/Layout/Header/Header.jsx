import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className='header-logo' src="./logo.svg" alt="Логотип" />
      <ul className="header-nav">
        <li className="header-nav__item">Поиск фильмов</li>
        <li className="header-nav__item">Мои фильмы</li>
        <li className="header-nav__item">
          Войти
          <img className="header-nav-item__img" src="./Login.svg" alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
