import s from "./OurAdvantages.module.css";
import { locales } from "../../locales";
const OurAdvantages = ({ language }) => {
  const localization = locales[language] || locales["ua"];

  return (
    <section className={s.container}>
      <div className={s.containerDiv}>
        <h2 className={s.title}>{localization.ourAdvantages}</h2>
        <ul className={s.list}>
          {localization.advantages.map((advantage, index) => (
            <li key={index} className={s.item}>
              {advantage}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurAdvantages;
