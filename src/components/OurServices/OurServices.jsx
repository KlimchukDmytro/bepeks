import s from "./OurServices.module.css";
import { locales } from "../../locales";
import bepeks_services from "../../assets/bepeks_services.jpg";

const OurServices = ({ language }) => {
  return (
    <section className={s.container}>
      <div className={s.containerDiv}>
        <h2 className={s.title}>{locales[language].ourServices}</h2>
        <div className={s.containerFlex}>
          <img className={s.img} src={bepeks_services} alt="bepeks_services" />
          <ul className={s.list}>
            {locales[language].services.map((service, index) => (
              <li key={index} className={s.item}>
                <div className={s.square}></div>
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
      </div>
    </section>
  );
};

export default OurServices;
