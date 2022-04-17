import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const {name, price, img, description } = service;
    const navigate = useNavigate()
    
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={200} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description} </Card.Text>
                    <Card.Text>Price: $ {price} </Card.Text>
                    <div className='text-center'>
                        <Link to='/checkout'>
                        <Button className='btn btn-primary mt-3 w-75'>Proceed CheckOut</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;