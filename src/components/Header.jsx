import React, { useState } from "react";
import Menu from "./Menu";

import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: "Обо мне", href: "/" },
    { value: "Услуги и цены", href: "/services" },
    { value: "Отзывы клиентов", href: "/feedback" },
    { value: "Познавательные материалы", href: "/blog" },
  ];

  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="line"></div>
          <div className="header-main">
            <Link to="/">
              <div className="logo">
                <img src="/img/icon/logo.svg" alt="Екатерина Славная" />
              </div>
            </Link>
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
