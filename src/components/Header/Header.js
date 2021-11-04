import "../Header/Header.scss"
import { Link } from "react-router-dom";
import logo from "../../assets/logo/BrainFlix-logo.svg"

export default function Header(){

    return (
        <div className="header">
            <a className="header__logo" href="/" ><img src={logo} alt="logo"></img></a>
            <div className="header__content">
                <div className="header__elements">
                    <input className="header__search-bar" type="search" placeholder="Search"></input>
                    <div className="header__avatar"></div>
                </div>
                <Link className="header__button-link" to="/upload">
                    <div className="header__button">
                        <span className="header__button-icon"></span>
                        <span>UPLOAD</span>
                    </div>
                </Link>
                <div className="header__avatar-alt"></div>
            </div>
        </div>
    );
}