import { Link } from "react-router-dom";
import "./Blogpage.scss";

const Blogpage = () => {
  return (
    <main className="main">
      <section className="section__blog">
        <div className="container">
          <h2 className="title">познавательные материалы</h2>
          <article className="article__blog d-fl-wrap">
            <div className="blog__block-left">
              <div className="blog__img">
                <img
                  src="img/photo/mom-daughter.webp"
                  alt="Популярные вопросы психологу"
                />
              </div>
            </div>
            <div className="blog__block-right">
              <h5>5 вопросов психологу</h5>
              <p>
                «Поможет ли мне психолог?» <br />
                «Сколько сессий мне понадобится?»
                <br />
                <br />
                Ответы на эти (и не только) вопросы – в моей новой статье.
                <br />
                <br />
                Приятного чтения!
              </p>
              <Link to="/blog-five-question" className="btn blog__btn">
                Перейти к чтению
              </Link>
            </div>
          </article>
          <article className="article__blog d-fl-wrap">
            <div className="blog__block-left">
              <div className="blog__img">
                <img
                  src="img/photo/blog-2.png"
                  alt="Популярные вопросы психологу"
                />
              </div>
            </div>
            <div className="blog__block-right">
              <h5>Как выбрать психолога?</h5>
              <p>
                Грамотный психолог, со временем, помогает человеку восстановить
                свой психоэмоциональный фон и прийти к здоровому
                психологическому состоянию. <br />
                <br /> Грамотного психолога необходимо выбирать, руководствуясь
                основными критериями.
              </p>
              <Link to="/blog-choise-psychologist" className="btn blog__btn">
                Перейти к чтению
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export { Blogpage };
