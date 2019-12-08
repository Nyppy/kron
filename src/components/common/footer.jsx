import React from 'react';

import logo_footer from '../../assets/img/logo-footer.png';
import kron_auto from '../../assets/img/kron-auto.png';
import apple_brands from '../../assets/img/apple-brands.svg';
import google_play_brands from '../../assets/img/google-play-brands.svg';
import vk_social_network_logo from '../../assets/img/vk-social-network-logo.png';
import instagram from '../../assets/img/instagram_(1).png';
import facebook_logo from '../../assets/img/facebook-logo.png';
import visa from '../../assets/img/visa.png';
import mastercard from '../../assets/img/mastercard_(1).png';
import mir from '../../assets/img/mir.png';

import '../../assets/syles/style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-block container">
        <div className="footer-block__flex">
          <div className="footer-block__item">
            <div className="footer-block__heading">KRON AUTO</div>
            <ul className="footer-list">
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  Тарифы
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  Новости
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="index_partner.html">
                  Партнерство
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  Карьера
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  Контакты
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="index_faq.html">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-block__item">
            <div className="footer-block__heading">KRON SHIP</div>
            <ul className="footer-list">
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  Грузоперевозки
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  Сервисы
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  Партнерам
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  Карьера
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-block__item">
            <div className="footer-block__heading">KRON FOOD</div>
            <ul className="footer-list">
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  Доставка еды
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  Партнерам
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-block__contacts">
          <img className="footer-block__img" src={logo_footer} alt="logo" />
          <div className="footer-app">
            <a href="#" className="footer-app__link">
              <img className="footer-app__img" src={kron_auto} alt="kron" />
              <p className="footer-app__kron">
                Доехать к нам
                <br />
                <span className="footer-app__heading">KRON AUTO</span>
              </p>
            </a>
            <a href="#" className="footer-app__link">
              <img className="footer-img" src={apple_brands} alt="apple" />
              <div className="footer-app__text">App Store</div>
            </a>
            <a href="#" className="footer-app__link">
              <img
                className="footer-img"
                src={google_play_brands}
                alt="google"
              />
              <p className="footer-app__google">Google Play</p>
            </a>
          </div>
          <div className="footer-social">
            <a href="#" className="footer-social__link">
              <img src={vk_social_network_logo} alt="vk" />
            </a>
            <a href="#" className="footer-social__link">
              <img
                className="footer-social__facebook"
                src={instagram}
                alt="instagram"
              />
            </a>
            <a href="#" className="footer-social__link">
              <img
                className="footer-social__facebook"
                src={facebook_logo}
                alt="facebook"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-line container"></div>
      <div className="footer-copyrights container">
        <div className="footer-copyrights__item">
          <a className="footer-copyrights__link" href="#">
            Условия использования
          </a>
          <a className="footer-copyrights__link" href="#">
            Политика конфиденциальности
          </a>
        </div>
        <div className="footer-copyrights__item">
          <p className="footer-copyrights__text">
            2019 KRON, LLC Все права защищены.
          </p>
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
  );
};

export default Footer;
