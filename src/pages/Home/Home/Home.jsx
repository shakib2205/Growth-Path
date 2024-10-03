import React from 'react';
import OurVenture from './OurVenture';
import Identity from './Identity';
import Expertise from './Expertise';
import Reviews from './Reviews';
import Growth from './Growth';

const Home = () => {
    return (
        <div className='mb-6'>
            <OurVenture></OurVenture>
            <Identity></Identity>
            <Expertise></Expertise>
            <Reviews></Reviews>
            <Growth></Growth>
        </div>
    );
};

export default Home;