import s from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { locales } from "../../locales";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MobMenu from "../MobMenu/MobMenu";

const Header = ({ language, setLanguage }) => {
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <img className={s.img} src={Logo} alt="logo" />
        <nav className={s.nav}>
          <a className={s.item} href="#home">
            {locales[language].home}
          </a>
          <a className={s.item} href="#ourServices">
            {locales[language].ourServices}
          </a>
          <a className={s.item} href="#ourAdvantages">
            {locales[language].ourAdvantages}
          </a>
          <a className={s.item} href="#contacts">
            {locales[language].contacts}
          </a>
        </nav>
        <div className={s.btn_burger}>
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
