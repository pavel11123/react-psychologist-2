import "./Homepage.scss";

const Homepage = () => {
  return (
    <main className="main">
      <section className="section__start">
        <div className="container">
          <div className="d-fl-wrap">
            <div className="section__block section__block-left">
              <h2>Ваш личный психолог</h2>
              <h1>Екатерина Славная</h1>
              <ul className="d-fl-col">
                <li>Индивидуальные консультации</li>
                <li>Экстренная online-помощь</li>
                <li>Познавательные материалы</li>
              </ul>
              <a className="btn start__btn" href="index.html">
                Записаться на бесплатную консультацию
              </a>
            </div>
            <div
              className="section__block section__block-right
            d-fl"
            >
              <div className="start__img">
                <img
                  src="/img/photo/photo-main.png"
                  alt="Личный психолог - Екатерина Славная"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Homepage };
