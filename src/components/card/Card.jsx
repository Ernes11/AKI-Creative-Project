import React from "react";
import "../../sass/card.scss";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FormattedMessage } from "react-intl";

const Card = ({ item }) => {
  return (
    <div className="card" style={{ backgroundColor: "transparent" }}>
      <div className="container-card">
        <h1 className="top-title">
          <FormattedMessage id="AssociationFounders" />
        </h1>
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
                  <img src={Val.image} alt={Val.title} className="card-photo" />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <p className="founder_name">
                      {Val.founder.submit.full_name}
                    </p>
                    <p className="founder_company">
                      {Val.founder.submit.company_name}
                    </p>
                  </div>
                </div>

                <div className="social-icons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={Val.founder.submit.facebook}
                  >
                    <FaFacebookSquare size={30} className="icons" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={Val.founder.submit.telegram}
                  >
                    <FaTelegram size={30} className="icons" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={Val.founder.submit.instagram}
                  >
                    <AiFillInstagram size={32} className="icons" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
