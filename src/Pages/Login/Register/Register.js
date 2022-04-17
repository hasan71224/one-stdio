import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin = event => {
        navigate('/login')
    }
    return (
        <div>
            <div className='w-25 mx-auto border border-1 rounded-3 p-3 mt-5 shadow p-3 mb-5 bg-body rounded'>
                <h2 className='text-center mb-3 text-primary'>Register Now</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block mt-3' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='mt-3'>Already have an account? <span className='text-danger' style={{ cursor: "pointer" }} onClick={navigateLogin}>LogIn</span> </p>
            </div>
            <div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;