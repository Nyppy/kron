import React, {Component} from 'react';

import temp_img from '../../assets/img/temp.png';

import {HeaderPrivate} from '../../components/common'
import InputMask from 'react-input-mask';

import "./private-office.css";

class ImagesProfile extends Component {

    render() {
        const {name, surname, id, lvl} = this.props.data
        const img = this.props.img
        return(
            <div className="wrapper_img_profile">
                <span style={{color: "#194146",fontSize: '18px'}}>Фото профиля</span>
                <div className="img-profile-data">
                    <img className="img-profile" src={img} alt=""/>
                    <div className="user-data-content"> 
                        <span className="user-name_">{name}</span>
                        <span className="user-surname">{surname}</span>
                        <span className="user-id">Ваш ID: {id}</span>
                        <span className="user-lvl">Рейтинг: {lvl}/5</span>
                    </div>
                </div>
                <input type="button" className="custom-file-input" value="Выбрать фото"/>
                <div className="profile-data-info"> 
                    <span>Внимание фотография должна быть:<br/>
                        - Без очков<br/>
                        - Только ваше фото<br/>
                        - Фото лица
                    </span>
                </div>
            </div>
        )
    }
}

class ChangeDataProfile extends Component {
    render() {
        return(
            <div className="wrapper_сhange_data">
                <span style={{color: "#194146",fontSize: '18px'}}>Изменение личных данных</span>
                <div className="change-data-position">
                    <div className="change-data-1">
                        <input type="text" className="new-name" placeholder="Ваше имя *" required/>
                        <input type="text" className="new-surname" placeholder="Ваша фамилия *" required/>
                        <InputMask mask="+7(999)999-99-99" className="new-phone" maskChar={null} required placeholder="Ваш телефон *"/>
                        <div style={{ width: '100%'}}>
                            <input className="send-code" type="button" value="Отправить SMS"/>
                            <InputMask mask="999999" className="new-code" maskChar={null} required placeholder="Код SMS"/>
                        </div>
                        <span>
                            <input className="politics" type="checkbox" defaultChecked required/>
                            <span style={{fontSize: "15px"}}>Я принимаю условия<br/></span>
                            <a href="" style={{fontSize: "15px"}}>«‎Соглашение на обработку персональных данных»‎</a>
                        </span> 
                        
                    </div>
                    <div className="change-data-2">
                        <input type="text" className="new-email" placeholder="Ваш e-mail *" required/>
                        <input type="text" className="new-city" placeholder="Город *" required/>
                        <input type="text" className="new-address" placeholder="Адрес *" required/>
                        <input className="new-date" required type="date"/>
                        <select className="new-select">
                            <option>Мужчина</option>
                            <option>Женщина</option>
                        </select>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input type="button" className="new-save" value="Сохранить изменения"/>
                    <input type="button" className="dell-account" value="Удалить аккаунт"/>
                </div>
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
    user_data = {name: 'Иван', surname: 'Иванов', status: 'Водитель', id: '741501', lvl: '4'}

    render() {
        return(
            <div style={{backgroundColor: '#ccc', minHeight: '860px'}}>
                <HeaderPrivate img={temp_img} data={this.user_data} />
                <div className="wrapper-content-priv">
                    <div className="cont-priv">
                        <div className="block-priv">
                            <ImagesProfile img={temp_img} data={this.user_data}  />
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