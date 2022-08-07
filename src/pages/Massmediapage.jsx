import { Link } from "react-router-dom";
import "./Massmediapage.scss";

const Massmediapage = () => {
  return (
    <main className="main">
      <section className="section__blog">
        <div className="container">
          <h2 className="title">Публикации в сми</h2>
          <article className="article__blog d-fl-wrap">
            <div className="blog__block-left">
              <div className="blog__img">
                <div className="media__content d-fl-col">
                  <h3>
                    Способы психологического воздействия на молодежь по
                    вовлечению в секты
                  </h3>
                  <p>Автор Екатерина Славная</p>
                </div>
              </div>
            </div>
            <div className="blog__block-right">
              <h5>
                Способы психологического воздействия на молодежь по вовлечению в
                секты
              </h5>
              <p>
                В статье описываются распространённые способы психологического
                влияния на молодежь по вовлечению в различные секты. Указан
                общий алгоритм мер адептов групп.
                <br />
                <br />
                Приятного чтения!
              </p>
              <a
                href="https://apni.ru/article/4408-sposobi-psikhologicheskogo-vozdejstviya"
                className="btn blog__btn"
                target="_blank"
              >
                Перейти к чтению
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export { Massmediapage };
