import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    // Handle Form Submit 
    const handleFromSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger text-center my-3'>Error: {error?.message}</p>
        </div>
    };
    if (loading || sending) {
        <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    };


    // Navigate Register Page
    const navigateRegister = event => {
        navigate('/register')
    }

    // Password Reset 
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Check Email');
        } else {
            toast('Please Enter your Email Address')
        }
    }


    return (
        <div className='my-5'>
            <Helmet>
                <title>Login-Inventory car management</title>
            </Helmet>
            <h1 className='text-center py-5'>Please Login!!</h1>
            <div className="container">
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                    <Form onSubmit={handleFromSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button className='d-block mx-auto bg-info text-white rounded px-5 py-2' variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    {errorElement}
                    <h6 className='mt-5'>Are you new here? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Please Register</span></h6>
                    <h6 className='mt-5'>Forget Password? <span className='text-primary' style={{ cursor: 'pointer' }} onClick={resetPassword}>Reset Password</span></h6>

                </div>
                <div className="col-lg-3 col-md-3 col-sm-12"></div>

                <div className="my-5">
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default Login;