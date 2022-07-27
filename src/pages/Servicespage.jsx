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
              <figure className="d-fl-col">
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
              <figure className="d-fl-col">
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
              <figure className="d-fl-col">
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
              <figure className="d-fl-col">
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
              <figure className="d-fl-col">
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
              <figure className="d-fl-col">
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
              <h3>Экстренная online-помощь</h3>
              <span>Подробнее</span>
            </Link>
            <Link to="/" className="more__block">
              <h3>Познавательные материалы</h3>
              <span>Подробнее</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section__work">
        <div className="container">
          <h2 className="title">как проходит работа</h2>
          <div className="work-grid">
            <div className="work__block">
              <div className="work__block-text d-fl-col">
                <h4>Бесплатный анализ ситуации</h4>
                <p>
                  Чтобы понять, находится ли Ваш запрос в зоне моих
                  профессиональных компетенций.
                </p>
              </div>
            </div>
            <div className="work__block">
              <div className="work__block-text d-fl-col">
                <h4>Консультация онлайн</h4>
                <p>
                  20 минут видео звонка в удобном мессенджере. Конфиденциально.
                </p>
              </div>
            </div>
            <div className="work__block">
              <div className="work__block-text d-fl-col">
                <h4>Резюме после консультации</h4>
                <p>Ключевые моменты, задания и практики для личной работы.</p>
              </div>
            </div>
            <div className="work__block">
              <div className="work__block-text d-fl-col">
                <h4>Пост сопровождение</h4>
                <p>
                  Ответы на важные вопросы, которые могут возникнуть после
                  консультации.
                </p>
              </div>
            </div>
          </div>
          <div className="work__popup-main d-fl-wrap">
            <a href="/" className="work__popup d-fl-col">
              <div className="work__popup-img">
                <img
                  src="img/icon/meeting.png"
                  alt="Первая консультация от Екатерины Славной бесплатно!"
                />
              </div>
              <h5>
                Записаться на
                <br /> первичную консультацию
              </h5>
              <span>Бесплатно</span>
            </a>
            <a href="/" className="work__popup d-fl-col">
              <div className="work__popup-img">
                <img
                  src="img/icon/schedule.png"
                  alt="Первая консультация от Екатерины Славной бесплатно!"
                />
              </div>
              <h5>
                Записаться на
                <br /> индивидуальную консультацию
              </h5>
              <span>70 минут / 5000₽</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Servicespage };
