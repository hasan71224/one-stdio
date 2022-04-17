import { async } from '@firebase/util';
import { updateProfile } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      
    const navigate = useNavigate()

    if (loading) {
        return <Loading></Loading>;
    }

    if(user){
        console.log(user);
    }


    const navigateLogin = event => {
        navigate('/login')
    }
    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;

        if(agree){
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
            alert('Updated profile');
            navigate('/')
        }
    }

    return (
        <div>
            <div className='w-25 mx-auto border border-1 rounded-3 p-3 mt-5 shadow p-3 mb-5 bg-body rounded'>
                <h2 className='text-center mb-3 text-primary'>Register Now</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check name='terms' type="checkbox" label="Accept Terms and Condition" required/>
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