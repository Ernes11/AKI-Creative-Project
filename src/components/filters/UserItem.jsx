import React from "react";
import { Card } from "react-bootstrap";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";


const UserItem = ({ user }) => {
  return (
    <Card className="user">
      <Card.Img style={{maxHeight:'60%'}} variant="top" src={user.photo} className="user__image" alt={user.submit.full_name} />
      <Card.Body>
        <Card.Title className="user__name">{user.submit.full_name}</Card.Title>
        <Card.Text className="user__details">
          {/* <span>{title}</span> */}
          <span className="position">{user.submit.position}</span>
          <ul className="social-icons">
          <a className="icons" href={user.submit.facebook}><FaFacebookSquare size={30} className="icons" /></a>
           <a href={user.submit.telegram}><FaTelegram size={30} className="icons" /></a>
          <a href={user.submit.whatsapp}><RiWhatsappFill size={32} className="icons" /></a>
          <a href={user.submit.instagram}><AiFillInstagram size={32} className="icons" /></a>
          </ul> 
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
