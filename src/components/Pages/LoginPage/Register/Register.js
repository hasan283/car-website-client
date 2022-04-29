import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    // Handle Register 
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    // Navigate Login page 
    const navigateLogin = event => {
        navigate('/login')
    }



    return (
        <div>
            <h1 className='text-center py-5'>Please Register!!</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12"></div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Form onSubmit={handleRegister}>


                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" name="name" placeholder="Your Name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" name="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" name="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-5'>Already Have an Account? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateLogin}>Please Login</span></p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12"></div>
                </div>
            </div>
        </div>
    );
};

export default Register;