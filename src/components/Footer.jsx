import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="line"></div>
        <div className="footer-main">
          <div className="footer__docs">
            <a href="index.html">Политика конфиденциальности</a>
            <a href="index.html">Договор оферты</a>
          </div>
          <div className="line"></div>
          <div className="society">
            <a
              target="_blank"
              href="https://t.me/@Slavnaja"
              className="society__img"
            >
              <svg>
                <use xlinkHref="/sprite.svg#tg"></use>
              </svg>
            </a>
            <a
              href="https://wa.me/79262137087?text=Здравствуйте!%20мне%20нужна%консультация!"
              className="society__img"
              target="_blank"
            >
              <svg>
                <use xlinkHref="/sprite.svg#wp"></use>
              </svg>
            </a>
            <a
              target="_blank"
              href="https://vk.com/katrinrosa"
              className="society__img"
            >
              <svg>
                <use xlinkHref="/sprite.svg#vk"></use>
              </svg>
            </a>
            <a
              href="https://ru.pinterest.com/ekaterinaslavnaya/"
              className="society__img"
              target="_blank"
            >
              <svg>
                <use xlinkHref="/sprite.svg#pinterest"></use>
              </svg>
            </a>
          </div>
        </div>
        <div className="line"></div>
      </div>
      {/* <div className="footer-bottom">
        <a href="index.html">Сайт разработан командой Kowalenko Web-Studio</a>
      </div> */}
    </footer>
  );
}

export default Footer;
