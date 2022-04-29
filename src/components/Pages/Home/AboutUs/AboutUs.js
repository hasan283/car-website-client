import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './About.css'

const AboutUs = () => {
    return (
        <div className='about'>
            <h1 className='text-center py-5 title'>About <span>Us</span></h1>
            <div className="about-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                            <h2>WELCOME TO THE CAR INVENTORY</h2>
                            <p>This is our car inventory. Here you will find many beautiful cars of your choice. You can choose the car of your choice by ordering from our shop online and directly. If you buy a car from here you will get 5 years free service. Buy the car of your choice without wasting time.</p>
                            <p><b><i>About each of our cars:</i></b></p>
                            <p><FontAwesomeIcon className='icon' icon={faCheck}></FontAwesomeIcon>   Beautiful modeling car design.</p>
                            <p><FontAwesomeIcon className='icon' icon={faCheck}></FontAwesomeIcon>  5 years free service.</p>
                            <p><FontAwesomeIcon className='icon' icon={faCheck}></FontAwesomeIcon>  Full Support.</p>
                            <p><FontAwesomeIcon className='icon' icon={faCheck}></FontAwesomeIcon>  Offline Service or Online Service.</p>
                            <p><FontAwesomeIcon className='icon' icon={faCheck}></FontAwesomeIcon>  Awesome Lighting, Awesome Tier And Awesome Engin.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                            <iframe width="100%" height="440" src="https://www.youtube.com/embed/21CY9RtMQkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;