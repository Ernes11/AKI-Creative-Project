import React from "react";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import "../sass/footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" id="footer">
      <footer className="footer-fixed">
        <div className="container">
          <div className="footer-row">
            <ul className="footer-links">
              <li><Link to='/'>Главная</Link></li>
              <li><Link to='/about'>О нас</Link></li>
              <li><Link to='/event'>Мероприятия</Link></li>
              <li><Link to='/membership'>Членство</Link></li>
              <li><Link to='/joinus'>Вступить в ассоциацию</Link></li>
              <li><Link to='/resource'>Ресурсы </Link></li>
            </ul>

            <div className="footer-column">
              <ul className="footer-contact">
                <li>Контакты</li>
                <li>Адрес: г. Бишкек,  ул. Исанова 105/3</li>
                <li>
                  creative.kyrgyzstan@gmail.com 
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

          <p className="footer-copyright">
            Copyright &copy; Aki Creative Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
