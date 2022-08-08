import "./Homepage.scss";
import Accordion from "../components/Accordion";
import { accordionData } from "../components/utils/contents";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main className="main">
      <section className="section__start">
        <div className="container">
          <div className="section-wrap">
            <div className="section__block section__start-left">
              <h2>Ваш личный психолог</h2>
              <h1>Екатерина Славная</h1>
              <div className="start__img-phone">
                <img
                  src="/img/photo/photo-main.png"
                  alt="Личный психолог - Екатерина Славная"
                />
              </div>
              <ul className="d-fl-col">
                <li>Индивидуальные консультации</li>
                <li>Экстренная online-помощь</li>
                <li>Познавательные материалы</li>
              </ul>
              <a
                className="btn start__btn"
                target="_blank"
                href="https://qlick.io/widget/ekaterina-slavnaya/meeting-60m/start"
              >
                Записаться на бесплатную консультацию
              </a>
            </div>
            <div
              className="section__block section__start-right
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
      <section className="section__about">
        <div className="container">
          <div className="section-wrap">
            <div className="section__block section__about-left">
              <div className="about__img">
                <img
                  src="/img/photo/about.png"
                  alt="Личный психолог - Екатерина Славная"
                />
              </div>
            </div>
            <div className="section__block section__about-right d-fl">
              <div className="section__about-right--wrapper d-fl-col">
                <h2 className="title">
                  Привет! Меня <br /> зовут Екатерина
                </h2>
                <h3>Я – практикующий психолог</h3>
                <ul className="d-fl-col">
                  <li>
                    <p>
                      На сегодняшний день я являюсь экспертом в области
                      диетологии, избыточного веса, спортивной медицины и
                      рациональных тренировок.
                    </p>
                  </li>
                  <li>
                    <p>
                      Прошла обучение в Международной Академии Аэробики и в 2003
                      году и открыла свой первый небольшой клуб.
                    </p>
                  </li>
                  <li>
                    <p>
                      За годы работы я поняла что проблемы в сознании, а не в
                      выборе диеты. И тогда получила ещё и психологическое
                      образование.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="plus d-fl-col">
            <div className="line"></div>
            <p>
              Я никогда не стою на месте и постоянно учусь. Применяю в своей
              работе все самые новые достижения современной диетологии,
              спортивной медицины, имеющие под собой доказательную базу.
            </p>
            <div className="line"></div>
          </div>
        </div>
      </section>
      <section className="section__education">
        <div className="container">
          <div className="education-main">
            <h2 className="title">Моё образование и сертификаты</h2>
            <ul className="d-fl-col">
              <li>
                Сестринское дело (ММУ 28 при институте Склифосовского Москва
                1992 год. Диплом)
              </li>
              <li>Лечебное дело (ММСИ 1996 год Москва. Диплом)</li>
              <li>
                Повышение квалификации Ароматерапия в лечении психосоматических
                заболеваний (РУДН 2000 год. Сертификат)
              </li>
              <li>
                повышение квалификации Лечебная физкультура (РУДН 2000 год.
                Сертификат)
              </li>
              <li>Педагог психолог (МСГИ 2004 год. Диплом)</li>
              <li>
                Повышение квалификации Классическая аэробика, продвинутый курс
                (МФАЭ 2005 год. Международный диплом)
              </li>
              <li>
                Повышение квалификации Йога, продвинутый курс (МФАЭ 2005 год.
                Международный диплом)
              </li>
              <li>
                Международная школа НЛП - тренинг Весна жизни продвинутый курс
                (Сертификат)
              </li>
              <li>
                Кандидат психологических наук (ВЭКС, Москва 2009 год. Диплом)
              </li>
              <li>
                Повышение квалификации Ментальная кинезиология. (РУДН, 2010 год.
                Сертификат)
              </li>
              <li>
                Психогенетический анализ. (МШ ПА София. Международный
                сертификат)
              </li>
              <li>
                Диетология, нутрициология, расстройства пищевого поведения. (МШД
                2019 год. Международный сертификат)
              </li>
              <li>
                Нутрициология, диагностика и лечение РПП. (НИПО, Саратов 2019
                год. Диплом)
              </li>
            </ul>
            <div className="plus d-fl-col">
              <div className="line"></div>
              <p>Частная практика с 2003 года</p>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section__question">
        <div className="container">
          <div className="question-main">
            <h2 className="title">часто задаваемые вопросы</h2>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section__massmedia">
        <div className="d-fl">
          <Link
            to="/mass-media"
            className="massmeedia__block massmeedia__block-left d-fl-col"
          >
            <h4>Публикации в сми</h4>
            <span>Статьи для научных журналов</span>
          </Link>
          <Link
            to="/blog"
            className="massmeedia__block massmeedia__block-right d-fl-col"
          >
            <h4>Почитать</h4>
            <span>Об отношениях, самооценке, уверенности</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export { Homepage };
