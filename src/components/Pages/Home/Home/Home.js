import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Teams from '../Teams/Teams';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Inventory car management</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Inventories></Inventories>
            <Teams></Teams>
        </div>
    );
};

export default Home;