import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const {id, name, price, img, description } = service;
    const navigate = useNavigate()
    const navigateToServiceDetails=(id)=>{
        navigate(`service/${id}`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={200} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description} </Card.Text>
                    <Card.Text>Price: $ {price} </Card.Text>
                    <Button onClick={()=>navigateToServiceDetails(id)} variant="primary">Service Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;