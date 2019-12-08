import React, {Component} from 'react';

import temp_img from '../../assets/img/logo-car.png';

import {HeaderPrivate} from '../../components/common'

import "./private-office.css";

class ImagesProfile extends Component {
    render() {
        return(
            <div className="wrapper_img_profile">
                Фото профиля
            </div>
        )
    }
}

class ChangeDataProfile extends Component {
    render() {
        return(
            <div className="wrapper_hange_data">
                <p>Смена личных данных</p>
            </div>
        )
    }
}

class History extends Component {
    render() {
        return(
            <div className="wrapper_history">
                <p>История</p>
            </div>
        )
    }
}

class Question extends Component {
    render() {
        return(
            <div className="wrapper_question">
                <p>Вопросы</p>
            </div>
        )
    }
}

class ChangePassword extends Component {
    render() {
        return(
            <div className="wrapper_change_pass">
                <p>Смена пароля</p>
            </div>
        )
    }
}

class KronApp extends Component {
    render() {
        return(
            <div className="wrapper_app">
                <p>Приложения крон</p>
            </div>
        )
    }
}

class Info extends Component {
    render() {
        return(
            <div className="wrapper_ifo">
                <p>Информация</p>
            </div>
        )
    }
}

class Coupon extends Component {
    render() {
        return(
            <div className="wrapper_coupon">
                <p>Купон</p>
            </div>
        )
    }
}

class PrivateMain extends Component {
    // ADD Передает данные в шапку: фото пользователя, имя, фамилия, статус(тип)
    
    render() {
        return(
            <div>
                <HeaderPrivate img={temp_img} name='Иванов Иван' status='Водитель' />
                <div className="wrapper-content">
                    <ImagesProfile />
                </div>
            </div>
        )
    }
}

export default PrivateMain;