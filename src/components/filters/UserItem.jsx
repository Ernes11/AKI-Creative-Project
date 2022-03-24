import React from "react";
import { Card } from "react-bootstrap";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const UserItem = ({ id, photo, name, title, position }) => {
  return (
    <Card className="user">
      <Card.Img variant="top" src={photo} className="user__image" alt={name} />
      <Card.Body>
        <Card.Title className="user__name">{name}</Card.Title>
        <Card.Text className="user__details">
          <span>{title}</span>
          <span className="position">{position}</span>
          <ul className="social-icons">
            <FaFacebookSquare size={30} className="icons" />
            <FaTelegram size={30} className="icons" />
            <RiWhatsappFill size={32} className="icons" />
            <AiFillInstagram size={32} className="icons" />
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
