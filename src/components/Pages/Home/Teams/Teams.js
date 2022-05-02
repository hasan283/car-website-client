import React from 'react';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPhone } from '@fortawesome/free-solid-svg-icons';
import userOne from '../../../Image/users/user-1.jpg';
import userTwo from '../../../Image/users/user-2.jpg';
import userThree from '../../../Image/users/user-3.jpg';
import userFour from '../../../Image/users/user-4.jpg';
import userFive from '../../../Image/users/user-5.jpg';
import userSix from '../../../Image/users/user-6.jpg';
const Teams = () => {
    return (
        <div id='teams' className='user-container py-5'>
            <h1 className='text-center title py-5'>Our <span>Services</span> Teams</h1>

            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="user">
                            <div className="user-image">
                                <img src={userOne} alt="" />
                            </div>
                            <div className="user-info pt-3 text-center">

                                <div className="icon py-2">
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </div>
                                <h5>Name: Milane</h5>
                                <p><b>Service: Managing System</b></p>
                                <p>She Is a Awesome Managing System Provider</p>
                                <div>
                                    <span><FontAwesomeIcon className='call-icon' icon={faPhone}> </FontAwesomeIcon>  +8809251780</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="user">
                            <div className="user-image">
                                <img src={userTwo} alt="" />
                            </div>
                            <div className="user-info pt-3 text-center">

                                <div className="icon py-2">
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </div>
                                <h5>Name: Alina Amith</h5>
                                <p><b>Service: Service Provider Manager</b></p>
                                <p>She Is a Very Intelligent Service Provider Manager</p>
                                <div>
                                    <span><FontAwesomeIcon className='call-icon' icon={faPhone}> </FontAwesomeIcon>  +8809251780</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="user">
                            <div className="user-image">
                                <img src={userThree} alt="" />
                            </div>
                            <div className="user-info pt-3 text-center">

                                <div className="icon py-2">
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </div>
                                <h5>Name: A.P.M Marco</h5>
                                <p><b>Service: Online and Offline Marketer</b></p>
                                <p>He Is a Very Intelligent Online and Offline Marketer</p>
                                <div>
                                    <span><FontAwesomeIcon className='call-icon' icon={faPhone}> </FontAwesomeIcon>  +8809251780</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="user">
                            <div className="user-image">
                                <img src={userFour} alt="" />
                            </div>
                            <div className="user-info pt-3 text-center">

                                <div className="icon py-2">
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </div>
                                <h5>Name: Alex</h5>
                                <p><b>Service: Service Provider</b></p>
                                <p>He Is a Very Intelligent Service Provider</p>
                                <div>
                                    <span><FontAwesomeIcon className='call-icon' icon={faPhone}> </FontAwesomeIcon>  +8809251780</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="user">
                            <div className="user-image">
                                <img src={userFive} alt="" />
                            </div>
                            <div className="user-info pt-3 text-center">

                                <div className="icon py-2">
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </div>
                                <h5>Name: Johan Smith</h5>
                                <p><b>Service: Service Seller</b></p>
                                <p>He Is a Very Intelligent Service Seller</p>
                                <div>
                                    <span><FontAwesomeIcon className='call-icon' icon={faPhone}> </FontAwesomeIcon>  +8809251780</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="user">
                            <div className="user-image">
                                <img src={userSix} alt="" />
                            </div>
                            <div className="user-info pt-3 text-center">

                                <div className="icon py-2">
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </div>
                                <h5>Name: Jesmin Arora</h5>
                                <p><b>Service: Customer Supporter</b></p>
                                <p>She Is a Very Honest Customer Supporter</p>
                                <div>
                                    <span><FontAwesomeIcon className='call-icon' icon={faPhone}> </FontAwesomeIcon>  +8809251780</span>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Teams;