import React from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const UserItem = ({ id, photo, name, title, position }) => {
  
  render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendDots: dots => (
				<div
					style={{
						backgroundColor: "#ddd",
						borderRadius: "10px",
						padding: "10px"
					}}
				>
					<ul style={{ margin: "0px" }}> {dots} </ul>
				</div>
			),
			customPaging: i => (
				<div
					style={{
						width: "30px",
						color: "blue",
						border: "1px blue solid"
					}}
				>
					{i + 1}
				</div>
			)
		}
  };
  return (
    <div className="container">

<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <Slider {...settings}>
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
    </Slider>
    </div>
    
  );
};

export default UserItem;
