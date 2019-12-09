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
            <div className="wrapper_сhange_data">
                Смена личных данных
            </div>
        )
    }
}

class History extends Component {
    render() {
        return(
            <div className="wrapper_history">
                История
            </div>
        )
    }
}

class Question extends Component {
    render() {
        return(
            <div className="wrapper_question">
                Вопросы
            </div>
        )
    }
}

class ChangePassword extends Component {
    render() {
        return(
            <div className="wrapper_change_pass">
                Смена пароля
            </div>
        )
    }
}

class KronApp extends Component {
    render() {
        return(
            <div className="wrapper_app">
                Приложения крон
            </div>
        )
    }
}

class Info extends Component {
    render() {
        return(
            <div className="wrapper_info">
                Информация
            </div>
        )
    }
}

class Coupon extends Component {
    render() {
        return(
            <div className="wrapper_coupon">
                Купон
            </div>
        )
    }
}

class PrivateMain extends Component {
    // ADD Передает данные в шапку: фото пользователя, имя, фамилия, статус(тип)
    
    render() {
        return(
            <div style={{backgroundColor: '#ccc', minHeight: '860px'}}>
                <HeaderPrivate img={temp_img} name='Иванов Иван' status='Водитель' />
                <div className="wrapper-content-priv">
                    <div className="cont-priv">
                        <div className="block-priv">
                            <ImagesProfile />
                            <ChangeDataProfile />
                        </div>
                        <div className="block-priv">
                            <KronApp />
                            <Info />
                        </div>
                        <div className="block-priv">
                            <ChangePassword />
                            <Question />
                            <Coupon />
                        </div>
                    </div>
                    <History />
                </div>
            </div>
        )
    }
}

export default PrivateMain;