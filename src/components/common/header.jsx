import React from 'react';

import logo from '../../assets/img/logo-kron.png';
import logo_car from '../../assets/img/logo-car.png';
import logo_ship from '../../assets/img/logo-ship.png';
import logo_food from '../../assets/img/logo-food.png';
import account from '../../assets/img/account-people.png';

import '../../assets/styles/style.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <a href="#" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="menu">
          <div className="menu__item">
            <a href="#" className="menu-img">
              <img src={logo_car} alt="car" />
            </a>
            <a href="#" className="menu__link">
              KRON AUTO
            </a>
          </div>
          <div className="menu__item">
            <a href="#" className="menu-img">
              <img src={logo_ship} alt="ship" />
            </a>
            <a href="#" className="menu__link">
              KRON SHIP
            </a>
          </div>
          <div className="menu__item">
            <a href="#" className="menu-img">
              <img src={logo_food} alt="food" />
            </a>
            <a href="#" className="menu__link">
              KRON FOOD
            </a>
          </div>
        </div>
        <a href="/private_office" className="header__account">
          <img className="account__img" src={account} alt="people" />
          <span>Личный кабинет</span>
        </a>
      </div>
      <nav className="navbar">
        <div className="navbar-box">
          <a href="#" className="navbar-box__link">
            Главная
          </a>
          <a href="#" className="navbar-box__link">
            Новости
          </a>
          <a href="#" className="navbar-box__link">
            Партнерство
          </a>
          <a href="#" className="navbar-box__link">
            Карьера
          </a>
          <a href="#" className="navbar-box__link">
            Контакты
          </a>
          <a href="#" className="navbar-box__link">
            FAQ
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
