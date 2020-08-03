import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';
import { RoomContext } from '../context';

function Rooms() {
    return (
     <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">retrun home</Link>
            </Banner>
            </Hero>
            <RoomContainer/>
    </>
    )
}

export default Rooms
