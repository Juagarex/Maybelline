import React from 'react'
import {
    HeroContainer,
    HeroImage,
    HeroBanner,
    }
    from './Hero.elements'

export const Hero = ({
    banner,
    alt
}) => {
    return (
        <>
            <HeroContainer>
                <HeroImage alt={alt} />
                <HeroBanner>
                    {banner}
                </HeroBanner>
            </HeroContainer>
        </>
    )
}

export default Hero
