import React, { Component } from "react";

import content from "../../assets/img/content.png";
import app_google from "../../assets/img/app-google-b.png";
import app_store from "../../assets/img/app-store-b.png";
import logo from "../../assets/img/logo-kron.png";

import "./login.css";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = { login: "", password: "" };

    this.loginChange = this.loginChange;
    this.passwordChange = this.passwordChange;
    this.button_login = this.button_login;

    this.loginValidateError = React.createRef();
    this.loginValidateAdminError = React.createRef();
  }

  loginChange = e => {
    this.setState({ ...this.state, login: e.target.value });
  };

  passwordChange = e => {
    this.setState({ ...this.state, password: e.target.value });
  };

  button_login = e => {
    const { login, password } = this.state;

    // TODO: отправка данных на сервер и валидация логина и пароля
    if (login === "" || password === "") {
      console.log("loginValidateError", this.loginValidateError);
      this.loginValidateError.style.display = "block";

      setTimeout(
        "document.getElementById('input_error').style.display = 'none'",
        3000
      );
    }
    if (login !== "admin" || password !== "admin") {
      this.loginValidateAdminError.style.display = "block";

      setTimeout(
        "document.getElementById('input_error_pass').style.display = 'none'",
        3000
      );
    }
    console.log(this.state.login, this.state.password);
  };

  render() {
    return (
      <div className="wrap_content">
        <div className="content_left">
          <img className="content__img" src={content} alt="content" />
        </div>
        <div className="content_right">
          <div className="content__form">
            <img
              style={{ width: "140px", margin: "0 auto", marginBottom: "20px" }}
              src={logo}
            />
            <span style={{ fontSize: "22px" }}>Вход</span>
            <input
              className="cont"
              onChange={this.loginChange}
              autoComplete="current-password"
              value={this.state.login}
              type="login"
              placeholder="Введите ваш логин"
            />
            <input
              className="cont"
              onChange={this.passwordChange}
              value={this.state.password}
              type="password"
              placeholder="Введите ваш пароль"
            />
            <span
              id="input_error"
              ref={this.loginValidateError}
              style={{ display: "none", color: "red", marginTop: "10px" }}
            >
              Введите логин или пароль!
            </span>
            <span
              id="input_error_pass"
              ref={this.loginValidateAdminError}
              style={{ display: "none", color: "red", marginTop: "10px" }}
            >
              Неверный логин или пароль!
            </span>
          </div>
          <div className="content__button">
            <div>
              <button className="content__button_1" onClick={this.button_login}>
                Вход
              </button>
              <a href="/register">
                <input
                  className="content__button_2"
                  type="button"
                  value="Регистрация"
                />
              </a>
            </div>
            <a
              href="/recuvery"
              style={{
                textDecoration: "none",
                color: "rgb(145,35,35)",
                fontSize: "18px"
              }}
            >
              Забыли пароль?
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className="img_form">
              <a href="#">
                <img src={app_store} className="img_form_i" />
              </a>

              <a href="">
                <img src={app_google} className="img_form_i" />
              </a>
            </div>
            <span>
              Создаем новый способ поездок <br />
              по городу для Вас!
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
