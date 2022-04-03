import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/navigation.scss";

function Navigation({ setLang , lang }) {
  const hangeChange = ({ target: { value } }) => {
    setLang(value)
  }
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
          <select onChange={hangeChange} value={lang} className="language">
            <option value="RU-RU">Рус</option>
            <option value="en-US">Eng</option>
            <option value="KG-KG">Кыр</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
