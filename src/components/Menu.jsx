import { Link } from "react-router-dom";

import React from "react";
import "./Menu.scss";

const Menu = ({ items, active, setActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur"></div>
      <div
        className="menu__content d-fl-col"
        // onClick={(e) => e.stopPropagation()}
      >
        <Link to="/">
          <div className="logo">
            <img src="/img/icon/logo-1.svg" alt="Екатерина Славная" />
          </div>
        </Link>
        <ul className="d-fl-col">
          {items.map((item) => (
            <li>
              <Link to={item.href}>{item.value}</Link>
            </li>
          ))}
        </ul>

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
            target="_blank"
            href="https://wa.me/79262137087?text=Здравствуйте!%20мне%20нужна%консультация!"
            className="society__img"
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
    </div>
  );
};

export default Menu;
