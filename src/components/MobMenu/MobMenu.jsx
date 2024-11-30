import s from "./MobMenu.module.css";
import Logo from "../../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
const MobMenu = ({ language, toggleLanguage, closeMenu }) => {
  return (
    <div>
      <div className={s.menuContainer}>
        <div className={s.img_btn}>
          <img className={s.img} src={Logo} alt="logo" />
          <button className={s.btn} onClick={toggleLanguage}>
            {language === "ua" ? "EN" : "UA"}
          </button>
          <AiOutlineClose
            size={30}
            className={s.closeIcon}
            onClick={closeMenu}
          />
        </div>
        <nav className={s.nav}>
          <a className={s.item} href="#home" onClick={closeMenu}>
            {language === "ua" ? "Головна" : "Home"}
          </a>
          <a className={s.item} href="#ourServices" onClick={closeMenu}>
            {language === "ua" ? "Наші послуги" : "Our services"}
          </a>
          <a className={s.item} href="#contacts" onClick={closeMenu}>
            {language === "ua" ? "Контакти" : "Contacts"}
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobMenu;
