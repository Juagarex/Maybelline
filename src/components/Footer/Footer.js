import React from 'react'
import {
    FooterContainer,
    FooterMenu,
    FooterItem,
    FooterLink,
    FooterIcon
    }
from './Footer.elements'

export const Footer = ({
    face,
    instagram,
    twitter
}) => {
    return (
        <>
            <FooterContainer>
                <FooterMenu>
                    <FooterItem>
                        <FooterLink to='/'>
                            INICIO
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink to='/'>
                            NOSOTROS
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink to='/'>
                            CONTACTENOS
                        </FooterLink>
                    </FooterItem>
                </FooterMenu>
                {/* menu de iconos */}
                <FooterMenu>
                        <FooterIcon DataImage={face}/>
                        <FooterIcon DataImage={instagram}/>
                        <FooterIcon DataImage={twitter}/>
                </FooterMenu>
            </FooterContainer>
        </>
    )
}

export default Footer
