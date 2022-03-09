import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/navigation.scss";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="../../images/Top_logo.png" alt="" />
          </NavLink>
          <div>
            <ul className="navbar-nav">
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
                <NavLink className="nav-link" to="/contact">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>
          <select className="language">
            <option value="Russian">Русский</option>
            <option value="English">English</option>
            <option value="Kyrgyz">Кыргызча</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
