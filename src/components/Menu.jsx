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
        onClick={(e) => e.stopPropagation()}
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
    </div>
  );
};

export default Menu;
