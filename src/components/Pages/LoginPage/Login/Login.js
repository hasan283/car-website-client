import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';

const Login = () => {
    const emailRef = useRef('');
    return (
        <div className='my-5'>
            <h1 className='text-center py-5'>Please Login!!</h1>
            <div className="container">
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Your Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <button style={{ border: 'none' }} className='d-block mx-auto bg-info text-white rounded px-5 py-2'>Login</button>
                    </Form>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
            </div>
        </div>
    );
};

export default Login;