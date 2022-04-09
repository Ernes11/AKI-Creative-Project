import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/navigation.scss";
import { FormattedMessage } from 'react-intl';

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
                <FormattedMessage id="Home"/>
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                <FormattedMessage id="AboutUs"/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/membership">
                <FormattedMessage id="Membership"/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/event">
                <FormattedMessage id="Events"/>
                </NavLink>
              </li>
              <li className="nav-item">
                <a target="_blank" className="nav-link" href="https://forms.gle/tmSP19PLXCeFdWcJ8" rel="noreferrer">
                <FormattedMessage id="Join"/>
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resource">
                <FormattedMessage id="Resource"/>
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                <FormattedMessage id="Contacts"/>
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
