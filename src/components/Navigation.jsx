import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../sass/navigation.scss";

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark">
        <div className="container">
          <div className="left">
            <NavLink className="navbar-brand" to="/">
              <img src="../../images/Top_logo.png" alt="" />
            </NavLink>
            <ul
              className={isMobile ? "navbar-nav-mobile" : "navbar-nav"}
              onClick={() => setIsMobile(false)}
            >
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Главная
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  О нас
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/membership">
                  Членство
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/event">
                  Мероприятия
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/joinus">
                  Присоединиться
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resource">
                  Ресурсы
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div className="right">
            <select className="language">
              <option value="RU">Рус</option>
              <option value="ENG">Eng</option>
              <option value="KG">Кыр</option>
            </select>
            <button
              className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
