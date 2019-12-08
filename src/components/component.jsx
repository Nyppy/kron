import React from 'react';
import './style.css';
import logo from './img/logo-kron.png';
import logo_car from './img/logo-car.png';
import logo_ship from './img/logo-ship.png';
import logo_food from './img/logo-food.png';
import account from './img/account-people.png';
import app_store from './img/app-store.png';
import app_google from './img/app-google.png';
import logo_footer from './img/logo-footer.png';
import kron_auto from './img/kron-auto.png';
import apple_brands from './img/apple-brands.svg';
import google_play_brands from './img/google-play-brands.svg';
import vk_social_network_logo from './img/vk-social-network-logo.png';
import instagram from './img/instagram_(1).png';
import facebook_logo from './img/facebook-logo.png';
import visa from './img/visa.png';
import mastercard from './img/mastercard_(1).png';
import mir from './img/mir.png';


class Header extends React.Component {
  render() {
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
                    <a href="#" className="menu__link">KRON AUTO</a>
                </div>
                <div className="menu__item">
                    <a href="#" className="menu-img">
                    <img src={logo_ship} alt="ship" />
                    </a>
                    <a href="#" className="menu__link">KRON SHIP</a>
                </div>
                <div className="menu__item">
                    <a href="#" className="menu-img">
                    <img src={logo_food} alt="food" />
                    </a>
                    <a href="#" className="menu__link">KRON FOOD</a>
                </div>
            </div>
            <a href="#" className="header__account">
                <img className="account__img" src={account} alt="people" />
                <span>Личный кабинет</span>
            </a>
        </div>
        <nav className="navbar">
            <div className="navbar-box">
                <a href="#" className="navbar-box__link">Главная</a>
                <a href="#" className="navbar-box__link">Новости</a>
                <a href="#" className="navbar-box__link">Партнерство</a>
                <a href="#" className="navbar-box__link">Карьера</a>
                <a href="#" className="navbar-box__link">Контакты</a>
                <a href="#" className="navbar-box__link">FAQ</a>
            </div>
        </nav>
      </div>
    )
  }
}


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-block container">
            <div className="footer-block__flex">
                <div className="footer-block__item">
                    <div className="footer-block__heading">KRON AUTO</div>
                    <ul className="footer-list">
                        <li className="footer-list__item"><a className="footer-list__link" href="#">Тарифы</a></li>
                        <li className="footer-list__item"><a className="footer-list__link" href="#">Новости</a></li>
                        <li className="footer-list__item"><a className="footer-list__link" href="index_partner.html">Партнерство</a></li>
                        <li className="footer-list__item"><a className="footer-list__link" href="#">Карьера</a></li>
                        <li className="footer-list__item"><a className="footer-list__link" href="#">Контакты</a></li>
                        <li className="footer-list__item"><a className="footer-list__link" href="index_faq.html">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-block__item">
                    <div className="footer-block__heading">KRON SHIP</div>
                    <ul className="footer-list">
                        <li className="footer-list__item"><a className="footer-list__link" href="#">Грузоперевозки</a></li>
                        <li className="footer-list__item"><a className="footer-list__link" href="#">Сервисы</a></li>
                        <li className="footer-list__item"><a className="footer-list__link" href="#">Партнерам</a></li>
                        <li className="footer-list__item"><a className="footer-list__link" href="#">Карьера</a></li>
                    </ul>
                </div>
                <div className="footer-block__item">
                    <div className="footer-block__heading">KRON FOOD</div>
                    <ul className="footer-list">
                        <li className="footer-list__item"><a className="footer-list__link" href="#">Доставка еды</a></li>
                        <li className="footer-list__item"><a className="footer-list__link" href="#">Партнерам</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-block__contacts">
                <img className="footer-block__img" src={logo_footer} alt="logo" />
                <div className="footer-app">
                    <a href="#" className="footer-app__link">
                        <img className="footer-app__img" src={kron_auto} alt="kron" />
                        <p className="footer-app__kron">Доехать к нам<br /><span className="footer-app__heading">KRON AUTO</span></p>
                    </a>
                    <a href="#" className="footer-app__link">
                        <img className="footer-img" src={apple_brands} alt="apple" />
                        <div className="footer-app__text">App Store</div>
                    </a>
                    <a href="#" className="footer-app__link">
                        <img className="footer-img" src={google_play_brands} alt="google" />
                        <p className="footer-app__google">Google Play</p>
                    </a>
                </div>
                <div className="footer-social">
                    <a href="#" className="footer-social__link">
                        <img src={vk_social_network_logo} alt="vk" />
                    </a>
                    <a href="#" className="footer-social__link">
                        <img className="footer-social__facebook" src={instagram} alt="instagram" />
                    </a>
                    <a href="#" className="footer-social__link">
                        <img className="footer-social__facebook" src={facebook_logo} alt="facebook" />
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-line container"></div>
        <div className="footer-copyrights container">
            <div className="footer-copyrights__item">
                <a className="footer-copyrights__link" href="#">Условия использования</a>
                <a className="footer-copyrights__link" href="#">Политика конфиденциальности</a>
            </div>
            <div className="footer-copyrights__item">
                <p className="footer-copyrights__text">2019 KRON, LLC Все права защищены.</p>
            </div>
        </div>
        <div className="footer__block container">
            <div className="footer-pay">
                <img className="img__width" src={visa} alt="visa" />
                <img className="footer-pay__img" src={mastercard} alt="mastercard" />
                <img className="img__width" src={mir} alt="mir" />
            </div>
        </div>
      </footer>
    )
  }
}

export {Header, Footer};
