import React, { useState } from "react";
import Menu from "./Menu";

import "./Header.scss";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: "Главная", href: "/" },
    { value: "Обо мне", href: "/aboutpage" },
    { value: "Услуги и цены", href: "/servicespage" },
    { value: "Отзывы клиентов", href: "/feedbackpage" },
    { value: "Познавательные материалы", href: "/blogpage" },
  ];

  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="line"></div>
          <div className="header-main">
            <a href="index.html">
              <div className="logo">
                <img src="/img/icon/logo.svg" alt="Екатерина Славная" />
              </div>
            </a>
            <div className="line"></div>
            <nav>
              <div
                className="burger-btn"
                onClick={() => setMenuActive(!menuActive)}
              >
                {/*добавь класс active при клике к menu__btn */}
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
          </div>
          <div className="line"></div>
        </div>
        <Menu
          active={menuActive}
          setActive={setMenuActive}
          header={"Бургер меню"}
          items={items}
        />
      </header>
    </>
  );
};

export default Header;
