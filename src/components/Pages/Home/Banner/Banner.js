import React from 'react';
import banner from '../../../Image/banner/banner.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-image">
            <img src={banner} alt="" />
            <div className="banner-info">
                <div className="banner-content">
                    <h1>PERFECT CARS FOR YOU</h1>
                    <p>Say Hello to New Kind of You Driving Car</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;