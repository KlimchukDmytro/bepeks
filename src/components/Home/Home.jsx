import s from "./Home.module.css";
const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.imageWrapper}>
        <div className={s.textOverlay}>
          <h1 className={s.h1}>LLC BEPEKS</h1>
          <p>
            Ваш партнер у виході на міжнародні ринки Ми допомагаємо малому та
            середньому бізнесу успішно освоювати зовнішні ринки, надаючи
            професійні рішення для ефективного розвитку вашого бізнесу.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
