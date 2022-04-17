import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigation=useNavigate()
    const handleSubmit = event =>{
       alert('Thanks For Submit')
       navigation('/')
    }
    return (
        <div className=''>
            <div className='w-25 mx-auto border border-1 rounded-3 p-3 mt-5 shadow p-3 mb-5 bg-body rounded'>
                <h2 className='text-center mb-3 text-primary'>CheckOut Form</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name='phone' type="text" placeholder="phone number"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name='Address' type="text" placeholder="Address"/>
                    </Form.Group>
                    
                    <Button className='w-50 mx-auto d-block mt-3' variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CheckOut;