import React from 'react';
import social1 from '../../../images/social/social1.png'
import social2 from '../../../images/social/social2.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error || githubError) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message} {githubError?.message}</p>
            </div>

    }
    if (loading || githubLoading) {
        return <p>Loading...</p>;
    }
    if (user || githubUser) {
        navigate('/')
    }
    return (
        <div className='w-25 mx-auto'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mt-3 mx-2 fw-bold'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div className='mb-3'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto'>
                    <img className='me-3' style={{ width: "30px" }} src={social1} alt="" />
                    Google SignIn
                </button>
            </div>

            <div>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-primary w-50 d-block mx-auto'>
                    <img className='me-3' style={{ width: "30px" }} src={social2} alt="" />
                    Github SignIn
                </button>
            </div>

        </div>

    );
};

export default SocialLogin;