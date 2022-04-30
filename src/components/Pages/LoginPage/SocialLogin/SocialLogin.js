import React from 'react';
import google from '../../../Image/socialIcon/google.png'
import github from '../../../Image/socialIcon/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (error || githubError) {
        errorElement = <div>
            <p className='text-danger text-center'>Error: {error?.message} {githubError?.message}</p>
        </div>
    };
    if (loading || githubLoading) {
        <Loading></Loading>
    }

    if (user || githubUser) {
        navigate(from, { replace: true });
    };

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className='container'>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12"></div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className='w-100 mx-auto'>

                            <button onClick={() => signInWithGoogle()} className='btn bg-dark text-white w-100'>
                                <img src={google} alt="" />
                                Google Sing In
                            </button>

                            <button onClick={() => signInWithGithub()} className='btn bg-info text-dark w-100 mt-3'>
                                <img src={github} alt="" />
                                Github Sing In
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12"></div>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;