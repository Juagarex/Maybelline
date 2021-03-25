import React from 'react'
import {
    FooterContainer,
    FooterMenu,
    FooterItem,
    FooterLink
    }
from './Footer.elements'

export const Footer = () => {
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
                <FooterMenu>
                    <FooterItem>
                        icono de face
                    </FooterItem>
                    
                    <FooterItem>
                        icono de Insta
                    </FooterItem>

                    
                    <FooterItem>
                        icono de twitter
                    </FooterItem>
                </FooterMenu>
            </FooterContainer>
        </>
    )
}

export default Footer
