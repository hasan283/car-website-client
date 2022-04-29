import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    // Handle Form Submit 
    const handleFromSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }

    // Navigate Register Page
    const navigateRegister = event => {
        navigate('/register')
    }


    return (
        <div className='my-5'>
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

                        <button style={{ border: 'none' }} className='d-block mx-auto bg-info text-white rounded px-5 py-2'>Login</button>
                    </Form>
                    <h6 className='mt-5'>Are you new here? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Please Register</span></h6>
                    {/* <h6 className='mt-5'>Forget Password? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={resetPassword}>Reset Password</span></h6> */}
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
            </div>
        </div>
    );
};

export default Login;