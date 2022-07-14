import React from "react";
import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
    </header>
  );
};

export default Header;