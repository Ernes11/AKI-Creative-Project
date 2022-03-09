import React from "react";
import "../../sass/card.scss";

const Card = ({ item }) => {
  return (
    <>
      <div className="container-card">
        <h1 className="top-title">учредители Ассоциации</h1>
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

                {/* ============Social-Icon============= */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
