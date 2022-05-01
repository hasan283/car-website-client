import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);


    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='container my-5'>
            <h3 className='text-danger text-center'>Your Email is not verified</h3>
            <h3 className='text-primary text-center'>Please Verify your email address</h3>
            <center>
                <button
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Please check your email address!!');
                    }}
                    style={{ border: 'none' }} className='my-5 px-5 py-2 bg-primary text-white rounded'>Send Verification Again</button>
            </center>
        </div >
    }

    return children;
};

export default RequireAuth;