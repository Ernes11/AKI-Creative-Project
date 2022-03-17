import React from "react";
import "../../sass/card.scss";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const Card = ({ item }) => {
  return (
    <>
      <div className="container-card">
        <h1 className="top-title">учредители Ассоциации</h1>
        <hr className="line_horizontal-1" />
        <hr className="line_horizontal-2" />
        <hr className="line_horizontal-3" />
        <hr className="line_horizontal-4" />
        <hr className="line_horizontal-5" />
        <hr className="line_horizontal-6" />

        <div className="row-2">
          {item.map((Val) => {
            return (
              <div className="column" key={Val.id}>
                <div className="card-img">
                  <img
                    src="../../images/cofounder.png"
                    alt={Val.title}
                    className="card-photo"
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                  </div>
                  <div className="card-text">{Val.desc}</div>
                </div>

                <ul className="social-icons">
                  <FaFacebookSquare size={30} className="icons" />
                  <FaTelegram size={30} className="icons" />
                  <RiWhatsappFill size={32} className="icons" />
                  <AiFillInstagram size={32} className="icons" />
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
