import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, sendPasswordResetEmail, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { sendPasswordResetEmail } from 'firebase/auth';


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef(' ')
    const passwordRef = useRef(' ')
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true })
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>

    }
    if (loading) {
        return <Loading></Loading>;
    }

    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send Email');
        }
        else {
            toast("Please Enter Your Email")
        }
    }

    return (
        <div>
            <div className='w-25 mx-auto border border-1 rounded-3 p-3 mt-5 shadow p-3 mb-5 bg-body rounded'>
                <h2 className='text-center mb-3 text-primary'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-50 mx-auto d-block mt-3' variant="primary" type="submit">
                        LogIn
                    </Button>
                </Form>
                {errorElement}
                <p className='mt-3'>New to One studio? <span className='text-danger' style={{ cursor: "pointer" }} onClick={navigateRegister}>Register</span> </p>

                <p className='mt-3'>Forget Password? <span className='text-danger' style={{ cursor: "pointer" }} onClick={resetPassword}>Reset</span> </p>
            </div>

            <div>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;