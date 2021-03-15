import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Nav , NavbarContainer, NavLogo, NavIcon, MobileIcon} from './Navbar.element'
import {IconContext} from 'react-icons/lib';




const Navbar = () => {
    const [click, setClick]= useState(false);

    const handleClick= () => setClick(!click);
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon>
                        Ultra
                    </NavIcon>
                    </NavLogo>
                    <MobileIcon onClick= {handleClick}>
                    {click ? <FaTimes/> :
                    <FaBars/>}
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                        <NavLinks to='/'>
                            HOME
                        </NavLinks>
                        </NavItem>
                    </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar