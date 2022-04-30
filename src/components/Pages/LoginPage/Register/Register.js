import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';




const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (loading || updating) {
        <Loading></Loading>
    }

    // Handle Register 
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate(from, { replace: true });
        toast('Your Profile Updated Successfully');
    }
    if (user) {
        // navigate(from, { replace: true });
    }



    // Navigate Login page 
    const navigateLogin = event => {
        navigate('/login')
    }




    return (
        <div>
            {/* <Helmet>
                <title>Register-Inventory car management</title>
            </Helmet> */}
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
                            <Button className='d-block mx-auto bg-info text-white rounded px-5 py-2' variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                        <h6 className='mt-5'>Already Have an Account? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateLogin}>Please Login</span></h6>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12"></div>
                </div>
                <div className="my-5">
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;