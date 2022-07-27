import "./Homepage.scss";

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
              <a className="btn start__btn" href="index.html">
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
              <li>Международная академия аэробики (2003 год)</li>
              <li>Трансатлантическая академия психологии (2007 год)</li>
              <li>
                Галактический институт по внеземным цивилизациям (2009 год)
              </li>
              <li>Частная школа имени известного Психолога (2011 год)</li>
              <li>
                Психотерапия кризисных состояний (2016 год, переподготовка)
              </li>
              <li>
                Комплексная программа по психологическому консультированию (2019
                год)
              </li>
              <li>
                Современная психотерапия зависимиого и созависимого поведения
                (2020 год)
              </li>
            </ul>
            <div className="education-grid">
              <div className="education__img">
                <img
                  src="/img/photo/certificate.png"
                  alt="Екатерина Славная - Basies of dietology and nutriology"
                />
              </div>
              <div className="education__img">
                <img
                  src="/img/photo/certificate.png"
                  alt="Екатерина Славная - Basies of dietology and nutriology"
                />
              </div>
              <div className="education__img">
                <img
                  src="/img/photo/certificate.png"
                  alt="Екатерина Славная - Basies of dietology and nutriology"
                />
              </div>
              <div className="education__img">
                <img
                  src="/img/photo/certificate.png"
                  alt="Екатерина Славная - Basies of dietology and nutriology"
                />
              </div>
              <div className="education__img">
                <img
                  src="/img/photo/certificate.png"
                  alt="Екатерина Славная - Basies of dietology and nutriology"
                />
              </div>
            </div>
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
          </div>
        </div>
      </section>
    </main>
  );
};

export { Homepage };
