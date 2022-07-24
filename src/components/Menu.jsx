import { Link } from "react-router-dom";

import React from "react";
import "./Menu.scss";

const Menu = ({ header, items, active, setActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur"></div>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul>
          {items.map((item) => (
            <li>
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
