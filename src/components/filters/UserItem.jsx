import React from "react";
import { Card } from "react-bootstrap";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";


const UserItem = ({ user }) => {
  return (
    <Card className="user">
      <Card.Img style={{height:'60%'}} variant="top" src={user.photo} className="user__image" alt={user.submit.full_name} />
      <Card.Body>
        <Card.Title className="user__name">{user.submit.full_name}</Card.Title>
        <Card.Text className="user__details">
          <span className="position">{user.submit.position}</span>
          <ul className="social-icons">
          <a className="icons" target="_blank" rel="noreferrer" href={user.submit.facebook}><FaFacebookSquare size={30}  /></a>
           <a target="_blank" rel="noreferrer" href={user.submit.telegram}><FaTelegram size={30} className="icons" /></a>
          <a target="_blank" rel="noreferrer" href={user.submit.instagram}><AiFillInstagram size={32} className="icons" /></a>
          </ul> 
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
