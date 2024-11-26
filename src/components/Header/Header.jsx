import s from "./Header.module.css";
import Logo from "../../assets/logo.png";
// import { NavLink } from "react-router-dom";
import { locales } from "../../locales"; // Імпортуйте тексти
import { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState("ua"); // Стан для мови

  // Функція для перемикання мови
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ua" ? "en" : "ua"));
  };

  return (
    <div className={s.container}>
      <header className={s.header}>
        <img className={s.img} src={Logo} alt="logo" />
        <div>
          <nav className={s.nav}>
            <div className={s.list}>
              <a className={s.item} href="#home">
                {locales[language].home}
              </a>
            </div>
            <div className={s.list}>
              <a className={s.item} href="#about">
                {locales[language].about}
              </a>
            </div>
            <div className={s.list}>
              <a className={s.item} href="#contakts">
                {locales[language].contakts}
              </a>
            </div>
            {/* <div className={s.list}>
              <NavLink className={s.item} href="#home">
                {locales[language].home}
              </NavLink>
            </div>
            <div className={s.list}>
              <NavLink className={s.item} href="#about">
                {locales[language].about}
              </NavLink>
            </div> */}
            {/* <div className={s.list}>
              <NavLink className={s.item}>{locales[language].contakts}</NavLink>
            </div> */}
          </nav>
        </div>
        <button className={s.btn} onClick={toggleLanguage}>
          {language === "ua" ? "EN" : "UA"}
        </button>
      </header>
    </div>
  );
};

export default Header;
