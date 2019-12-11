import React from 'react';

import logo from '../../assets/img/logo-footer.png';

import '../../assets/styles/style.css';

const HeaderPrivate = (props) => {
    console.log(props)
    return (
        <div className="private-wrapper">
            <div className="private-content">
                <img src={logo} alt=""/>
            </div>

            <div className="private-users-img">
                <div className="user-data">
                    <span className="user-name">{props.data.name} {props.data.surname}</span>
                    <span className="status">{props.data.status}</span>
                </div>
                
                <img src={props.img} alt=""/>
            </div>
        </div>
    )
}

export default HeaderPrivate;
