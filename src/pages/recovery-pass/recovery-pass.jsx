import React from "react";
import InputMask from "react-input-mask";

import "./recovery-pass.css";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: "", code: "", pass1: "", pass2: "" };
    this.phoneChange = this.phoneChange;
    this.codeChange = this.codeChange;
    this.sendCode = this.sendCode;
    this.next = this.next;
    this.save = this.save;
  }

  phoneChange = e => {
    this.setState({...this.state, phone: e.target.value });
  };

  codeChange = e => {
    this.setState({...this.state, code: e.target.value });

    if (this.state.code.length >= 10) {
      document.getElementById("rec_next").style.backgroundColor = "#116E77";
      document.getElementById("rec_next").style.pointerEvents = "all";
    } else {
      document.getElementById("rec_next").style.backgroundColor = "#C5C5C5";
    }
  };

  sendCode = (e) => {
    // TODO: отправка телефона
    const {phone} = this.state

    if (phone.length === 16) {
      console.log(phone);
    } else {
      document.getElementById("error").style.display = "block";
      setTimeout(
        "document.getElementById('error').style.display = 'none'",
        3000
      );
    }
  }

  next = (e) => {
    // TODO: проверка кода
    document.getElementById("content_form1").style.display = "none";
    document.getElementById("content_form2").style.display = "block";
  }

  passChange1 = e => {
    this.setState({...this.state, pass1: e.target.value });
  };

  passChange2 = e => {
    this.setState({ ...this.state,pass2: e.target.value });
  };

  save = (e) => {
    const {pass1, pass2} = this.state;

    // TODO: отправка пароля на сервер
    if (pass1 !== pass2) {
      document.getElementById("error_pass").style.display = "block";
      setTimeout(
        "document.getElementById('error_pass').style.display = 'none'",
        4000
      );
    } else if (pass1 === '' || pass2 === '') {
      document.getElementById("error_pass2").style.display = "block";
      setTimeout(
        "document.getElementById('error_pass').style.display = 'none'",
        4000
      );
    } else {
      window.location.href = "/login";
    }
  }

  render() {
    return (
      <div className="wrapper_recovery">
        <div className="content_form1" id="content_form1">
          <span style={{ color: "#194146", fontSize: "20px" }}>
            Восстановление пароля
          </span>
          <form style={{ display: "flex", flexDirection: "column", width: '100%' }}>
            <InputMask
              mask="+7(999)999-99-99"
              className="rec_input"
              maskChar={null}
              value={this.state.phone}
              onChange={this.phoneChange}
              required
              placeholder="Ваш телефон *"
            />
            <p id="error">Введите коректный номер телефона!</p>
            <div style={{ margin: "10px 0 10px 0" }}>
              <a onClick={this.sendCode} className="rec_code_button">Отправить SMS</a>
              <InputMask
                mask="9 9 9 9 9 9"
                className="rec_code"
                maskChar={null}
                value={this.state.code}
                onChange={this.codeChange}
                required
                placeholder="Код из SMS"
              />
            </div>
            <a onClick={this.next} id="rec_next" className="rec_next"> Продолжить </a>
          </form>
        </div>

        <div className="content_form2" id="content_form2">
          <span style={{ color: "#194146", fontSize: "20px" }}>
            Восстановление пароля
          </span>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="password"
              onChange={this.passChange1}
              className="rec_pass"
              required
              placeholder="Придмайте пароль *"
            />
            <input
              type="password"
              onChange={this.passChange2}
              className="rec_pass"
              required
              placeholder="Повторите пароль *"
            />
            <p id="error_pass">Пароли не совпдают!</p>
            <p id="error_pass2">Введите пароль!</p>
            <a onClick={this.save} className="rec_save">Сохранить</a>
          </form>
        </div>
      </div>
    );
  }
}

export default Content;
