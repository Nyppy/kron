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
                <div class="user-data">
                    <span className="user-name">{props.name}</span>
                    <span className="status">{props.status}</span>
                </div>
                
                <img src={props.img} alt=""/>
            </div>
        </div>
    )
}

export default HeaderPrivate;
