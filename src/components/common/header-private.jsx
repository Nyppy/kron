import React, {Component} from 'react';

import logo from '../../assets/img/logo-footer.png';

import '../../assets/styles/style.css';


class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {onOpen: true}
    }
  
    toggleState = () => {
        this.setState({...this.state, onOpen: !this.state.onOpen });
        console.log(this.state.onOpen)
        console.log(document.getElementById("qqq").style.display)
        if (this.state.onOpen) {
            document.getElementById("qqq").style.display = "block"
            document.getElementById("a1").style.display = "none"
            document.getElementById("a2").style.display = "block"

        } else {
            document.getElementById("qqq").style.display = "none"
            document.getElementById("a2").style.display = "none"
            document.getElementById("a1").style.display = "block"
        }
    }
  
    render() {
        return (
            <div id="header-priv-menu" style={{zIndex: "99", marginRight: '10px', textAlign: "center", margin: "0 auto"}}>
                <div>
                    <span id="a1" onClick={this.toggleState} style={{color: '#fff', fontSize: "22px", zIndex:"99", display: "block", cursor: "pointer", marginRight: '10px'}}>▼</span>
                    <span id="a2" onClick={this.toggleState} style={{color: '#fff', fontSize: "22px", display: "none", cursor: "pointer", marginRight: '10px'}}>▶</span>
                    <svg onClick={this.toggleState}  viewBox="64 64 896 896" focusable="false" class="modile-data" data-icon="menu" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                </div>
                
                <div id="qqq">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <a href="/private_office" class="text-menu">Личные данные</a>
                        <a href="/private_office_driver" class="text-menu">Водитель</a>
                        <a href="" class="text-menu">Выйти</a>
                    </div>
                </div>
            </div>
        );
    }
}
  

const HeaderPrivate = (props) => {
    console.log(props)
    return (
        <div id="height-menu" style={{backgroundColor: "#333F50"}}>
            <div className="private-wrapper">
                
                <div className="private-content">
                    <img src={logo} alt=""/>
                </div>

                <div className="private-users-img">
                    <span id="menu-1"><Dropdown/></span>

                    <div className="user-data">
                        <span className="user-name">{props.data.name} {props.data.surname}</span>
                        <span className="status">{props.data.status}</span>
                    </div>
                    
                    <img src={props.img} alt=""/>
                </div>
            </div>
        </div>   
    )
}

export default HeaderPrivate;
