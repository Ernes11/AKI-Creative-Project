import React from "react";
import { social } from "../components/data";
import '../sass/footer.scss';

function Footer() {
  return (
    <div className="footer">
      <footer className="footer-fixed">
        <div className="container">
          <div className="footer-row">
            <ul className="footer-links">
              <li>Главная</li>
              <li>О нас</li>
              <li>Мероприятия</li>
              <li>Членство</li>
              <li>Вступить в ассоциацию</li>
            </ul>

            <div className="footer-column">
              <ul className="footer-contact">
                <li>Контакты</li>
                <li>Адрес</li>
                <li>
                  <a href="e-mail">creative.kyrgyzstan@gmail.com </a>
                </li>
              </ul>
              <ul className="social-icons">
                {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                    <li key={id}>
                      <a href={url}>{icon}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="footer-logo">
              <img src="../../images/Footer_logo.png" alt="" className="footer-img" />
            </div>
          </div>

          <p class="footer-copyright">
            Copyright &copy; Aki Creative Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
