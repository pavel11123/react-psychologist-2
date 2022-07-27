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
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <Link to="/">
          <div className="logo">
            <img src="/img/icon/logo-1.svg" alt="Екатерина Славная" />
          </div>
        </Link>
        <ul>
          {items.map((item) => (
            <li className="d-fl-col">
              <span></span>
              <Link to={item.href}>{item.value}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
