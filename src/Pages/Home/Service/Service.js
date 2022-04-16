import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={200} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description} </Card.Text>
                    <Card.Text>Price: $ {price} </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;