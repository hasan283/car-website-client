import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Services from '../Services/Services';
import Users from '../Users/Users';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Services></Services>
            <Users></Users>
        </div>
    );
};

export default Home;