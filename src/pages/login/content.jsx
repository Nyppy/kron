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
	  this.loginValidateError.current.style.display = "block";

	  setTimeout(
		"document.getElementById('input_error').style.display = 'none'",
		3000
	  );
	} else if (login !== "admin" || password !== "admin") {
	  this.loginValidateAdminError.current.style.display = "block";

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
			<img id="img-logo-1" src={logo}/>
			<span style={{ fontSize: "2vw" }}>Вход</span>
			<input className="cont" onChange={this.loginChange} autoComplete="current-password" value={this.state.login} type="login" placeholder="Введите ваш логин"/>
			<input className="cont" onChange={this.passwordChange} value={this.state.password} type="password" placeholder="Введите ваш пароль"/>
			<span id="input_error" ref={this.loginValidateError} style={{ display: "none", color: "red", marginTop: "10px" }}>
			  Введите логин или пароль!
			</span>
			<span id="input_error_pass" ref={this.loginValidateAdminError} style={{ display: "none", color: "red", marginTop: "10px" }}>
			  Неверный логин или пароль!
			</span>
		  <div className="content__button">
			<div className="but-pos">
			  <a href="#" className="content__button_1" onClick={this.button_login}>
			    Вход
			  </a>
			  <a href="/register" className="content__button_2">
				Регистрация
			  </a>
			</div>
			<a id="reg-text" href="/recuvery" >Забыли пароль?</a>
		  </div>
		  <div style={{ textAlign: "center", display: "flex", flexDirection: 'column', width: '100%'}}>
			<div className="img_form">
			  <a href="#">
				<img src={app_store} className="img_form_i" />
			  </a>

			  <a href="">
				<img src={app_google} className="img_form_i" />
			  </a>
			</div>
			<span style={{marginBottom: '2%'}}>
			  Создаем новый способ поездок по городу!
			</span>
		  </div>
		</div>
	  </div>
	);
  }
}

export default Content;
