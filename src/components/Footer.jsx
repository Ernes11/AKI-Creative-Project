import React, { useEffect, useState } from "react";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "../sass/footer.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import axios from "axios";

function Footer() {
  const [FooterInfo,setFooterInfo] = useState([])
    function FetchFooterInfo() { axios.get('https://creative.kg/api/footer/')
    .then(res =>{
      setFooterInfo(res.data.results)
    })}
    useEffect (()=> {
      FetchFooterInfo()
    },[])
  return (
    
    <div className="footer" id="footer">
      {FooterInfo.map (foot => (
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
                <li><FormattedMessage id="Contacts"/> : {foot.whatsapp}</li>
                <li>{foot.company_name}</li>
                <li>
                  {foot.company_email}
                </li>
              </ul>

              <ul className="social-icons">
                <a target="_blank" rel="noreferrer" href={foot.facebook}> <FaFacebookSquare size={30} className="icons" /></a>
                <a target="_blank" rel="noreferrer" href={foot.telegram}><FaTelegram size={30} className="icons" /></a>
                <a target="_blank" rel="noreferrer" href={foot.instagram }><AiFillInstagram size={32} className="icons" /></a>
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

          
        </div>
        <p className="footer-copyright">
            Copyright &copy; Aki Creative Website 2022
          </p>
      </footer>
      ))}
      
    </div>
  );
}

export default Footer;
