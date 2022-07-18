import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <nav>
        <ul className="header__link-list">
          <li>
            <Link className="header__link header__link_landing">
              Регистрация
            </Link>
          </li>
          <li>
            <Link className="header__link header__link_landing header__link_landing_active">
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;