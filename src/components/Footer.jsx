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
            <div className="society__img">
              <svg>
                <use xlinkHref="/sprite.svg#tg"></use>
              </svg>
            </div>
            <div className="society__img">
              <svg>
                <use xlinkHref="/sprite.svg#wp"></use>
              </svg>
            </div>
            <div className="society__img">
              <svg>
                <use xlinkHref="/sprite.svg#vk"></use>
              </svg>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div className="footer-bottom">
        <a href="index.html">Сайт разработан командой Kowalenko Web-Studio</a>
      </div>
    </footer>
  );
}

export default Footer;
