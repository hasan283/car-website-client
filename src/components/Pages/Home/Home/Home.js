import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Inventories></Inventories>
            <Teams></Teams>
        </div>
    );
};

export default Home;