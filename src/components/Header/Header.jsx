import s from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
// import clsx from "clsx";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(s.link, isActive && s.active);
// };

const Header = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <img className={s.img} src={Logo} alt="logo" />
        <div>
          <nav className={s.nav}>
            <div className={s.list}>
              <NavLink className={s.item}>ГОЛОВНА</NavLink>
            </div>
            <div className={s.list}>
              <NavLink className={s.item}>ПРО НАС</NavLink>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
