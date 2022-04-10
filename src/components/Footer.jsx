import React from "react";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import "../sass/footer.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

function Footer() {
  return (
    <div className="footer" id="footer">
      <footer className="footer-fixed">
        <div className="container">
          <div className="footer-row">
            <ul className="footer-links">
              <li><Link to='/'><FormattedMessage id="Home"/></Link></li>
              <li><Link to='/about'><FormattedMessage id="AboutUs"/></Link></li>
              <li><Link to='/event'><FormattedMessage id="Events"/></Link></li>
              <li><Link to='/membership'><FormattedMessage id="Membership"/></Link></li>
              <li><a target="_blank" href="https://forms.gle/tmSP19PLXCeFdWcJ8" rel="noreferrer"> <FormattedMessage id="JoinACI"/>
                </a></li>
              <li><Link to='/resource'><FormattedMessage id="Resource"/> </Link></li>
            </ul>

            <div className="footer-column">
              <ul className="footer-contact">
                <li><FormattedMessage id="Contacts"/></li>
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
