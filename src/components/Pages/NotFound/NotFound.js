import React from 'react';
import notFound from '../../Image/banner/notfound.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;