import React, { useState } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = () => {
    const services = [
        { icon: <FaCocktail />, title: "Free cocktails", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tortor dui" },
        { icon: <FaHiking />, title: "Endless hiking", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tortor dui" },
        { icon: <FaShuttleVan />, title: "Free shuttles", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tortor dui" },
        { icon: <FaBeer />, title: "The strongest beer", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tortor dui" },
        
    ];
    return (
        <section className="service">
            <Title title="services" />
            <div className="services-center">
                {services.map((item, index) => {
                    return(<article key={index} className="services">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>

                    </article>)
                })}
            </div>

        </section>
        
    )
}

export default Services;
