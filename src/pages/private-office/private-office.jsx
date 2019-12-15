import React, {Component} from 'react';

import temp_img from '../../assets/img/temp.png';
import googl_store from '../../assets/img/app-google-b.png';
import app_store from '../../assets/img/app-store-b.png';

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
                <a className="custom-file-input">Выбрать фото</a>
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
        const {name, surname, phone, email, city, address, user_date, gender} = this.props.data
        return(
            <div className="wrapper_сhange_data">
                <span style={{color: "#194146",fontSize: '18px'}}>Изменение личных данных</span>
                <div className="change-data-position">
                    <div className="change-data-1">
                        <input type="text" className="new-name" defaultValue={name} placeholder="Ваше имя"/>
                        <input type="text" className="new-surname" defaultValue={surname} placeholder="Ваша фамилия"/>
                        <span className="new-phone">{phone}</span>
                        <div style={{ width: '100%', margin: "10px 0 0 0", display: 'flex'}}>
                            <a className="send-code">Отправить SMS</a>
                            <InputMask mask="999999" className="new-code" maskChar={null} required placeholder="Код SMS"/>
                        </div>
                        <span>
                            <input className="politics" type="checkbox" defaultChecked required/>
                            <span style={{fontSize: "15px"}}>Я принимаю условия<br/></span>
                            <a href="" style={{fontSize: "15px"}}>«‎Соглашение на обработку персональных данных»‎</a>
                        </span> 
                        
                    </div>
                    <div className="change-data-2">
                        <span defaultValue={email} className="new-email">{email}</span>
                        <span className="new-city">{city}</span>
                        <span className="new-address">{address}</span>
                        <span className="new-date">{user_date}</span>
                        <span className="new-select">{gender}</span>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <a className="new-save">Сохранить изменения</a>
                    <a className="dell-account">Удалить аккаунт</a>
                </div>
            </div>
        )
    }
}

class KronApp extends Component {
    render() {
        return(
            <div className="wrapper_app">
                <span style={{fontSize: '18px', color: '#7A231D', marginBottom: '10px'}}>KRON app</span>
                <div className="app-text">
                    <span>Установите приложение к себе на телефон и управляйте своими заказами</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <a href="#"><img className="img-app" src={app_store} alt=""/></a>
                    <a href="#"><img className="img-app" src={googl_store} alt=""/></a>
                </div>
            </div>
        )
    }
}

class Info extends Component {
    render() {
        return(
            <div className="wrapper_info">
                <span style={{fontSize: '18px', color: '#7A231D', marginBottom: '10px', margin: "auto auto"}}>Скоро здесь появится новая функция</span>
            </div>
        )
    }
}

class ChangePassword extends Component {
    changeShowPass = (e) => {
        if (e.target.checked) {
          document.getElementsByClassName('new-pass-1')[0].type = 'text'
          document.getElementsByClassName('new-pass-2')[0].type = 'text'
        } else {
          document.getElementsByClassName('new-pass-1')[0].type = 'password'
          document.getElementsByClassName('new-pass-2')[0].type = 'password'
        }
    }

    render() {
        return(
            <div className="wrapper_change_pass">
                <span style={{fontSize: '18px', color: '#194146'}}>Изменение пароля</span>
                <form action="">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <input type="password" className="old-pass style-b" placeholder="Старый пароль *" required/>
                        <input type="password" className="new-pass-1 style-b" placeholder="Придумайте проль *" required/>
                        <input type="password" className="new-pass-2 style-b" placeholder="Повторите пароль *" required/>
                        <div>
                            <input type="checkbox" className="checkbox_pass" onChange={this.changeShowPass} name="show_pass"/>Показать пароль
                        </div>
                        <a className="new-set-pass">Изменить пароль</a>
                        <a href="/recuvery" style={{textDecoration: "none", textAlign: "center", color: "rgb(145,35,35)", fontSize: "16px", marginTop: '10px'}}>Забыли пароль?</a>
                    </div>
                </form>
            </div>
        )
    }
}

class Question extends Component {
    render() {
        return(
            <div className="wrapper_question">
                <span style={{fontSize: '18px', color: '#194146'}}>Задайте свой вопрос</span>
                <form action="">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <select className="quest-select">
                            <option>Выбирете тему вопроса</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        <textarea className="quest-text" cols="20" rows="4" placeholder="Введите свой вопрос"></textarea>
                        <a className="quest-button">Задать вопрос</a>
                        <a href="#" style={{textDecoration: "none", textAlign: "center", color: "rgb(145,35,35)", fontSize: "16px", marginTop: '10px'}}>Посмотрите FAQ</a>
                    </div>
                </form>
            </div>
        )
    }
}

class Coupon extends Component {
    render() {
        return(
            <div className="wrapper_coupon">
                <span style={{fontSize: '18px', color: '#194146'}}>Введите код с купона</span>
                <form action="">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <span style={{color: '#576476', fontSize: '13px', margin: '10px 0 10px 0'}}>Если у вас есть купон введите номер, 
                            чтобы активировать бесплатную поездку.</span>
                        <input type="text" className="coupon-code" defaultValue="Код *"/>
                        <a className="coupon-button">Активировать</a>
                        <a href="#" style={{textDecoration: "none", textAlign: "center", color: "rgb(145,35,35)", fontSize: "16px", marginTop: '10px'}}>Узнать подробнее</a>
                    </div>
                </form>
            </div>
        )
    }
}

class History extends Component {
    render() {
        const {id_user, date, service, address, id_worker, cash} = this.props.data
        return(
            <div className="wrapper_history">
                <span style={{fontSize: '18px', color: '#194146'}}>История заявок</span>
                <table className="table-history">
                    <tr className="header-table">
                        <td>id заявки</td>
                        <td>Дата</td>
                        <td>Услуга</td>
                        <td>Адрес</td>
                        <td>id исполнителя</td>
                        <td>Цена</td>
                    </tr>

                    {id_user.map(function(item, i){
                        return (<tr className="table-history-col">
                                    <td nowrap="true">{id_user[i]}</td>
                                    <td nowrap="true">{date[i]}</td>
                                    <td nowrap="true">{service[i]}</td>
                                    {/* <td nowrap><div style={{overflow: "hidden", width: "100%", whiteSpace: "nowrap"}}>{address[i]}</div></td> */}
                                    <td nowrap="true">{address[i]}</td>
                                    <td nowrap="true">{id_worker[i]}</td>
                                    <td nowrap="true">{cash[i]} руб.</td>
                                </tr>)
                    })}
                </table>
                <a className="download-history">Скачать всю историю</a>
                <a href="#" style={{textDecoration: "none", textAlign: "center", color: "rgb(145,35,35)", fontSize: "16px"}}>Очистить историю</a>
            </div>
        )
    }
}

class PrivateMain extends Component {
    // Передает данные в шапку: фото пользователя, имя, фамилия, статус(тип)
    user_data = {name: 'Иван', surname: 'Иванов', status: 'Личные данные', 
                id: '741501', lvl: '4', email: 'email@email.ru', address: 'Kursk, 50 let Oktybra',
                phone: '+7(999)123-12-12', city: 'Kursk', user_date: '2020-12-12', gender: 'Мужчина'}
    history_data = {id_user: [1,2,3,4,5,6],
                    date: ['11.12.2019','12.12.2019','13.12.2019','14.12.2019','15.12.2019','16.12.2019'],
                    service: ['KRON auto','KRON auto','KRON food','KRON auto','KRON food','KRON food'],
                    address: ['Kursk, qwer1 ыотлотлот лотлотлотл отлотлотлот лотлотлот','Kursk, qwer2','Kursk, qwer3','Kursk, qwer4','Kursk, qwer5','Kursk, qwer6'],
                    id_worker: [11,12,13,14,15,16],
                    cash: [100, 541, 761, 30, 57, 11]} 

    render() {
        return(
            <div style={{backgroundColor: 'rgb(236,236,236)', minHeight: '930px'}}>
                <HeaderPrivate img={temp_img} data={this.user_data} />
                <div className="wrapper-content-priv">
                    <div className="cont-priv">
                        <div className="block-priv">
                            <ImagesProfile img={temp_img} data={this.user_data}  />
                            <ChangeDataProfile data={this.user_data}/>
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
                    <History data={this.history_data} />
                </div>
            </div>
        )
    }
}

export default PrivateMain;