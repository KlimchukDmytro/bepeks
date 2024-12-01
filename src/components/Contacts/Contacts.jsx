import s from "./Contacts.module.css";
import { locales } from "../../locales";

const Contacts = ({ language }) => {
  const localization = locales[language] || locales["ua"];

  return (
    <section className={s.container}>
      <div className={s.containerDiv}>
        <h2 className={s.title}>{localization.contacts}</h2>
        <p>{localization.contactText}</p>
        <address>
          <ul className={s.list}>
            <li className={s.item}>
              {localization.phone}:
              <a href="tel:+38067"> +38(067)тут буде ваш номер</a>
            </li>
            <li className={s.item}>
              {localization.email}:
              <a href="mailto:info@bepeks.com"> info@bepeks.com</a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
};

export default Contacts;
