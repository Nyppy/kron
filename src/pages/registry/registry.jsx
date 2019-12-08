import React, {Component} from "react";
import {Header, Footer} from "../../components/common";
import InputMask from 'react-input-mask';

import cloud from "../../assets/img/cloud.png";
import automobile from '../../assets/img/automobile.png';
import cinema from '../../assets/img/cinema.png';
import clipboard from '../../assets/img/clipboard.png';
import website from '../../assets/img/website.png';
import mobile_network from '../../assets/img/Mobile-network.png';
import group_1 from '../../assets/img/Group-1.png';
import group_2 from '../../assets/img/Group-2.png';
import group_3 from '../../assets/img/Group-3.png';
import kron_app from '../../assets/img/kron-app.png';
import app_google from '../../assets/img/app-google.png';
import app_store from '../../assets/img/app-store.png';


import "./registry.css";


class Content extends Component{
  constructor(props) {
    super(props);
    this.state = {
      gender: 'male'
    }

    this.gender = this.gender.bind(this)
    this.validForm = this.validForm.bind(this)
  }

  changeShowPass = (e) => {
    if (e.target.checked) {
      document.getElementsByClassName('pass1')[0].type = 'text'
      document.getElementsByClassName('pass2')[0].type = 'text'
    } else {
      document.getElementsByClassName('pass1')[0].type = 'password'
      document.getElementsByClassName('pass2')[0].type = 'password'
    }
  }

  gender(g) {
    this.setState({gender: g})
  }

  validForm() {
    let name = this.name.value;
    let surname = this.surname.value;
    let phone = this.phone.value;
    let email = this.email.value;
    let pass1 = this.pass1.value;
    let pass2 = this.pass2.value;
    let code = this.code.value;
    let gender = this.state.gender

    // TODO: добавить отправку данных на сервер
  }

  render() {
    return (
      <div className="wrapper">
        <div className="register-form">
          <span style={{margin: "20px 0 10px 0", fontSize: "24px", color: '#344051'}}>Регистрация</span>
          <form style={{display: "flex", flexDirection: "column"}}>
            <input type="text" ref={ref => this.name = ref} className="name inp_text" required placeholder="Ваше имя *"/>
            <input type="text" ref={ref => this.surname = ref} className="surname inp_text" required placeholder="Ваше фамилия *"/>
            <InputMask mask="+7(999)999-99-99" ref={ref => this.phone = ref} className="phone inp_text" maskChar={null} required placeholder="Ваш телефон *"/>
            <input type="email" ref={ref => this.email = ref} className="email inp_text" required placeholder="Ваш e-mail *"/>
            <input type="password" ref={ref => this.pass1 = ref} className="pass1 inp_text" required placeholder="Придумайте пароль *"/>
            <input type="password" ref={ref => this.pass2 = ref} className="pass2 inp_text" required placeholder="Повторите пароль *"/>
            <span>
              <input type="checkbox" className="checkbox_pass" onChange={this.changeShowPass} name="show_pass"/>Показать пароль
            </span>
            <span style={{marginBottom: "5px"}}>
              <input className="date" required type="date"/>
              <div style={{marginTop: "8px", fontSize: "18px"}}>
                <input type="radio" defaultChecked onChange={() => {this.gender('male')}} name="sex"/>муж.
                <input style={{marginLeft: "20px"}} onChange={() => {this.gender('female')}} type="radio" name="sex"/>жен.
              </div>
            </span>
            <span>
              <input className="politics" type="checkbox" defaultChecked required/>
              <span style={{fontSize: "14px"}}>Я принимаю условия<br/></span>
              <a href="" style={{fontSize: "14px"}}>«‎Соглашение на обработку персональных данных»‎</a>
            </span>
            <input className="code_button" type="button" value="Отправить SMS-код"/>
            <div style={{display: "flex"}}>
              <InputMask mask="999999" ref={ref => this.code = ref} className="code" maskChar={null} required placeholder="Код SMS"/>
              <input type="button" onClick={this.validForm} className="register" value="Зарегестрироваться"/>
            </div>
          </form>
        </div>

        <div className="how_work">
          <span style={{fontSize: "22px", color: '#344051', fontWeight: 'bold'}}>Как мы работаем?</span>
          <div className="text_how">
            <span style={{width:"30%"}}>
              <img className="img_work" src={clipboard}/>
              1.Регестрируетеь в нашей системе
            </span>
            <span style={{width:"30%"}}>
              <img className="img_work" src={website}/>
              2.Получаете доступ к личному кабинету
            </span>
            <span style={{width:"30%"}}>
              <img className="img_work" src={mobile_network}/>
              3.Пользуетесь нашими услугами
            </span>
          </div>

          <div className="content_two">
            <div className="block_left">
              <div className="cont_two">
                <span className="hed_text">
                  <img className="img_head_text" src={cloud}/>
                  Единый аккаунт
                </span>
                <span style={{float: 'left', fontSize: '15px', marginTop: '5px'}}>
                    Создайте единый аккаунт, чтобы пользоваться<br/>
                    всеми сервисами нашей компании.
                </span>
              </div>

              <div className="cont_two">
                <span className="hed_text_2">
                  <img className="img_head_text" src={automobile}/>
                  Авторизация водителей
                </span>
                <p style={{fontSize: '15px', float: 'left', marginTop: '5px'}}>
                    Пройдите авторизацию в роли партнера и <br/>
                    начните принимать заявки в наших сервисах.
                </p>
              </div>

              <div className="cont_two">
                <span className="hed_text_3">
                  <img className="img_head_text" src={cinema}/>
                  Активируйте купоны
                </span>
                <p style={{float: 'left', fontSize: '15px', marginTop: '5px'}}>
                    Получайте купоны на поездки или скидки в <br/>
                    других сервисах и активируйте их в своем кабинете.
                </p>
              </div>

            </div>

            <div className="block_right">
              <div className="social_icon">
                <a href="#">
                  <img className="img_icon" src={group_1} />
                </a>
                <a href="#">
                  <img className="img_icon" src={group_2} />
                </a>
                <a href="#">
                  <img className="img_icon" src={group_3} />
                </a>
              </div>
              <div className="app_icon">
                <a href="#">
                  <img className="img_icon_app" src={kron_app} />
                </a>
                <a href="#">
                  <img className="img_icon_app" src={app_store} />
                </a>
                <a href="#">
                  <img className="img_icon_app" src={app_google} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class MainRegister extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default MainRegister;
