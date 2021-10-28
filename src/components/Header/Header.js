import "../Header/Header.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg"

function Header() {
    return (
        <div className="header">
            <img src={logo} className="header__logo" alt="logo"></img>
            <div className="header__content">
                <div className="header__elements">
                    <input className="header__search-bar" type="search" placeholder="          Search"></input>
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

export default Header;