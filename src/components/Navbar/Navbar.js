import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {Nav,
        NavbarContainer,
        NavLogo,
        NavIcon,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtnLink,

        } from './Navbar.element'





const Navbar = () => {
    const [click, setClick]= useState(false);
    const [button, setButton] = useState(true);


    const handleClick= () => setClick(!click);
    const showButton = () => {
        if(window.innerWidth <= 960 ) {
            setButton(false)
        } else{
            setButton(true)
            }
        }

        useEffect (() =>{
            showButton()
        }, []);

        window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                    Maybelline
                    </NavLogo>
                    <MobileIcon onClick= {handleClick}>
                    {click ? <FaTimes/> :
                    <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick = {handleClick} click={click}>
                        <NavItem>
                        <NavLinks to='/'>
                            INICIO
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='/nosotros'>
                            NOSOTROS
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='/contactanos'>
                            CONTACTANOS
                        </NavLinks>
                        </NavItem>
                        {button ? (
                            <NavBtnLink to="/sing-up">
                                <Button primary>SIGN UP</Button>
                            </NavBtnLink>
                        ) : (
                        <NavBtnLink to="/sing-up">
                            <Button fontBig primary>
                                Sing UP
                            </Button>
                        </NavBtnLink>
                        )}
                    </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar