import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

function Rooms() {
    return (
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">retrun home</Link>
            </Banner>
    </Hero>
    
    )
}

export default Rooms
