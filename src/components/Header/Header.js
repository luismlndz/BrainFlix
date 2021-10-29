import {Component} from "react";
import "../Header/Header.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg"

export default class Header extends Component{

    render() {
        return (
            <div className="header">
                <a className="header__logo" href="/" ><img src={logo} alt="logo"></img></a>
                <div className="header__content">
                    <div className="header__elements">
                        <input className="header__search-bar" type="search" placeholder="Search"></input>
                        <div className="header__avatar"></div>
                    </div>
                    <div className="header__button">
                        <span className="header__button-icon"></span>
                        <span>UPLOAD</span>
                    </div>
                    <div className="header__avatar-alt"></div>
                </div>
            </div>
        );
    }
}