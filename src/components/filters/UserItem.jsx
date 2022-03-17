import React from 'react';
import {Card} from 'react-bootstrap';

const UserItem = ({ id, photo, name, title, position}) => {
  return (
    <Card className="user">
      <Card.Img variant="top" src={photo} className="user__image" alt={name} />
      <Card.Body>
        <Card.Title className="user__name">{name}</Card.Title>
        <Card.Text className="user__details">
          <span>
            {title}
          </span>
          <span className="position">
            {position}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserItem;