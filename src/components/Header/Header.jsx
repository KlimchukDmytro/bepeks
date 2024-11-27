import s from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { locales } from "../../locales";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MobMenu from "../MobMenu/MobMenu";

const Header = () => {
  const [language, setLanguage] = useState("ua");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ua" ? "en" : "ua"));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setMenuOpen(false);
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
          </nav>
        </div>
        <button className={s.btn} onClick={toggleLanguage}>
          {language === "ua" ? "EN" : "UA"}
        </button>
        <div className={s.burger} onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </header>
      {menuOpen && (
        <MobMenu
          language={language}
          toggleLanguage={toggleLanguage}
          closeMenu={closeMenu}
        />
      )}
    </div>
  );
};

export default Header;
