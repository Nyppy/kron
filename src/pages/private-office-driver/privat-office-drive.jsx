import React, {Component} from 'react';

import temp_img from '../../assets/img/temp.png';
import googl_store from '../../assets/img/app-google-b.png';
import app_store from '../../assets/img/app-store-b.png';

import {HeaderPrivate} from '../../components/common'
import InputMask from 'react-input-mask';

import "./privat-office-drive.css";

class PrivatDriverPass extends Component {

    render() {
        return(
            <div className="wrapper_driver_pass">
                <span style={{color: "#194146",fontSize: '22px'}}>Ваши права</span>
                <input className="driver-pass-inp" type="text" placeholder="Серия Номер *" required/>
                <input className="driver-pass-inp" type="text" placeholder="Дата выдачи *" required/>

                <a className="save-driver-pass">Сохранить</a>

                <span style={{color: "#7A231D",fontSize: '18px'}}>Внимание!</span>
                <div className="info-driver-pass"> 
                    <span>Подключиться к сервису KRON AUTO и KRON
                          SHIP можно только при наличии собственного
                          автомобиля или  доверенности на управление
                          данным автомобилем. Мы оставляем за собой
                          право дополнительной проверки вашего
                          аккаунта.
                    </span>
                </div>
            </div>
        )
    }
}

class KronApp extends Component {
    render() {
        return(
            <div className="wrapper_app_two">
                <span style={{fontSize: '18px', color: '#7A231D', marginBottom: '5px'}}>KRON app</span>
                <div className="app-text_">
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

class KronAuto extends Component {
    render() {
        return(
            <div className="kron-auto">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <span style={{color: "#194146",fontSize: '18px'}}>KRON AUTO</span>
                    <span style={{color: "#194146",fontSize: '15px'}}>Вы подключены</span>
                    <a className="disconnect-account">Отключиться</a>
                </div>
                
                <div className="change-data-position-two">
                    <div className="auto-change-data-1">
                        <input type="text" className="name-auto width-inp-auto"  placeholder="Марка автомобиля *" required/>
                        <input type="text" className="color-auto width-inp-auto" placeholder="Цвет" required/>
                        <div style={{ width: '100%', margin: "0", display: 'flex', justifyContent: "space-between"}}>
                            <input type="text" className="number-auto" placeholder="Номер" required/>
                            <input type="text" className="region-auto" placeholder="Регион" required/>
                        </div>

                        
                    </div>
                    <div className="auto-change-data-2">
                        <input type="text" className="data-reg-auto width-inp-auto"  placeholder="Свидетельство о регистрации ТС *" required/>
                        <input type="text" className="polis width-inp-auto" placeholder="Страховой полис" required/>
                        <input type="text" className="address-auto width-inp-auto" placeholder="Адрес" required/>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <a className="new-save">Сохранить изменения</a>
                    <a className="dell-account">Загрузить довренность</a>
                </div>
            </div>
        )
    }
}

class KronShip extends Component {
    render() {
        return(
            <div className="kron-ship">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <span style={{color: "#194146",fontSize: '18px'}}>KRON SHIP</span>
                    <span style={{color: "#7A231D",fontSize: '15px'}}>Вы не подключены</span>
                    <a className="connect-account">Подключиться</a>
                </div>
                
                <div className="change-data-position-two">
                    <div className="auto-change-data-1">
                        <input type="text" className="name-auto width-inp-auto"  placeholder="Марка автомобиля *" required/>
                        <input type="text" className="color-auto width-inp-auto" placeholder="Цвет" required/>
                        <div style={{ width: '100%', margin: "0", display: 'flex', justifyContent: "space-between"}}>
                            <input type="text" className="number-auto" placeholder="Номер" required/>
                            <input type="text" className="region-auto" placeholder="Регион" required/>
                        </div>

                        
                    </div>
                    <div className="auto-change-data-2">
                        <input type="text" className="data-reg-auto width-inp-auto"  placeholder="Свидетельство о регистрации ТС *" required/>
                        <input type="text" className="polis width-inp-auto" placeholder="Страховой полис" required/>
                        <input type="text" className="address-auto width-inp-auto" placeholder="Тип техники" required/>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <a className="new-save-ship">Сохранить изменения</a>
                    <a className="dell-account-ship">Загрузить довренность</a>
                </div>
            </div>
        )
    }
}

class MainPrivatOfficeDriver extends React.Component {
    user_data = {name: 'Иван', surname: 'Иванов', status: 'Водитель', 
                id: '741501', lvl: '4', email: 'email@email.ru', address: 'Kursk, 50 let Oktybra',
                phone: '+7(999)123-12-12', city: 'Kursk', user_date: '2020-12-12', gender: 'Мужчина'}

    render() {        
        return (
            <div id="q3" style={{backgroundColor: 'rgb(236,236,236)', minHeight: '486px'}}>  
                <HeaderPrivate img={temp_img} data={this.user_data} />
                <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
                    <div className="pass-content-priv">
                        {/* <div style={{display: "flex"}}> 
                            <PrivatDriverPass/>
                            <KronAuto/>
                        </div>
                        <div style={{display: "flex"}}>
                            <KronApp/>
                            <KronShip/>
                        </div> */}
                        <div id='q1' style={{width: "38%"}}>
                            <PrivatDriverPass/>
                            <KronApp/>
                        </div>
                        <div id="q2" style={{marginLeft: "2%", width: "100%"}}>
                            <KronAuto/>
                            <KronShip/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPrivatOfficeDriver;