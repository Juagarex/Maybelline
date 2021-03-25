import React from 'react'
import {InfoSection } from '../../components'
import {Hero} from '../../components/Hero/Hero'
import { homeObjOne, homeObjTwo, heroHome } from './Data'

const Home = () => {
    return (
        <>
        <Hero{...heroHome}/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo} />
        </>
    )
}

export default Home
