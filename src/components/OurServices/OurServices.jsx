import s from "./OurServices.module.css";
import { locales } from "../../locales";

const OurServices = ({ language }) => {
  return (
    <section className={s.container}>
      <div className={s.containerDiv}>
        <h2 className={s.title}>{locales[language].ourServices}</h2>
        <ul className={s.list}>
          {locales[language].services.map((service, index) => (
            <li key={index} className={s.item}>
              {service.title}
              {service.subItems && (
                <ul className={s.itemList}>
                  {service.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className={s.itemItem}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
