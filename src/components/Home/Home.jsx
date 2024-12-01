import s from "./Home.module.css";
import { locales } from "../../locales";

const Home = ({ language }) => {
  return (
    <div className={s.container}>
      <div className={s.imageWrapper}>
        <div className={s.textOverlay}>
          <h1 className={s.h1}>LLC BEPEKS</h1>
          <p>{locales[language].textHome}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
