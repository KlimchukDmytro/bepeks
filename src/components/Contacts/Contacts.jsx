import s from "./Contacts.module.css";
import { locales } from "../../locales";
import officeImage from "../../assets/Office.jpg";
import officeImg from "../../assets/Office2.jpg";

const Contacts = ({ language }) => {
  const localization = locales[language] || locales["ua"];

  return (
    <section className={s.container}>
      <div className={s.containerDiv}>
        <img className={s.jpg} src={officeImage} alt="Office" />
        <h2 className={s.title}>{localization.contacts}</h2>
        <p>{localization.contactText}</p>
        <address>
          <ul className={s.list}>
            <li className={s.item}>
              {localization.phone}:
              <a href="tel:+380673526577"> +380 (67) 352 65 77</a>
            </li>
            <li className={s.item}>
              {localization.email}:
              <a href="mailto:info@bepeks.com"> info@bepeks.com</a>
            </li>
          </ul>
          <img className={s.jpg} src={officeImg} alt="Office2" />
        </address>
      </div>
    </section>
  );
};

export default Contacts;
