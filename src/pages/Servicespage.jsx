import { Link } from "react-router-dom";
import "./Servicespage.scss";

const Servicespage = () => {
  return (
    <main className="main">
      <section className="section__services">
        <div className="container">
          <h2 className="title">Услуги и цены</h2>
          <div className="services-grid">
            <div className="services__block">
              <figure>
                <div className="services__img">
                  <img
                    src="img/photo/services-1.png"
                    alt="Екатерина Славная - Психолог, проблемы в отношениях"
                  />
                </div>
                <figcaption>Самооценка, неуверенность в себе</figcaption>
              </figure>
            </div>
            <div className="services__block">
              <figure>
                <div className="services__img">
                  <img
                    src="img/photo/services-2.png"
                    alt="Екатерина Славная - Психолог, проблемы в отношениях"
                  />
                </div>
                <figcaption>Любовная зависимость</figcaption>
              </figure>
            </div>
            <div className="services__block">
              <figure>
                <div className="services__img">
                  <img
                    src="img/photo/services-3.png"
                    alt="Екатерина Славная - Психолог, проблемы в отношениях"
                  />
                </div>
                <figcaption>Проблемы в отношениях</figcaption>
              </figure>
            </div>
            <div className="services__block">
              <figure>
                <div className="services__img">
                  <img
                    src="img/photo/services-4.png"
                    alt="Екатерина Славная - Психолог, проблемы в отношениях"
                  />
                </div>
                <figcaption>Депрессия, кризис среднего возраста</figcaption>
              </figure>
            </div>
            <div className="services__block">
              <figure>
                <div className="services__img">
                  <img
                    src="img/photo/services-5.png"
                    alt="Екатерина Славная - Психолог, проблемы в отношениях"
                  />
                </div>
                <figcaption>Личностный рост, предназначение</figcaption>
              </figure>
            </div>
            <div className="services__block">
              <figure>
                <div className="services__img">
                  <img
                    src="img/photo/services-6.png"
                    alt="Екатерина Славная - Психолог, проблемы в отношениях"
                  />
                </div>
                <figcaption>Ступор в жизни и карьере</figcaption>
              </figure>
            </div>
          </div>
          <div className="services__more-grid">
            <Link to="/" className="more__block">
              <h3>Индивидуальные сессии</h3>
              <span>Подробнее</span>
            </Link>
            <Link to="/" className="more__block">
              <h3>Индивидуальные сессии</h3>
              <span>Подробнее</span>
            </Link>
            <Link to="/" className="more__block">
              <h3>Индивидуальные сессии</h3>
              <span>Подробнее</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section__work"></section>
    </main>
  );
};

export { Servicespage };
