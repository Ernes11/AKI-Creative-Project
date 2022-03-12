import React from "react";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import "../sass/footer.scss";

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
                <FaFacebookSquare size={30} className="icons" />
                <FaTelegram size={30} className="icons" />
                <RiWhatsappFill size={32} className="icons" />
                <AiFillInstagram size={32} className="icons" />
              </ul>
            </div>
            <div className="footer-logo">
              <img
                src="../../images/Footer_logo.png"
                alt=""
                className="footer-img"
              />
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
