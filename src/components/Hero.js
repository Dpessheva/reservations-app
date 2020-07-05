import React from 'react'

const Hero = ({children, hero}) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
// this will be the default class 
export default Hero;
Hero.defaultProps = {
    hero:"defaultHero"
}