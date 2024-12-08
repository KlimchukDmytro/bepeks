import s from "./OurAdvantages.module.css";
import { locales } from "../../locales";
const OurAdvantages = ({ language }) => {
  const localization = locales[language] || locales["ua"];

  return (
    <section className={s.container}>
      <h2 className={s.title}>{localization.ourAdvantages}</h2>
      <div className={s.containerDiv}>
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
