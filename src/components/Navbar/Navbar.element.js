import styled from 'styled-components'
import {Container} from '../../globalStyles'


export const Nav = styled.nav `
background-color:#f4f4f4;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
font-weight:1.2rem;
top:0;
z-index:999;
`;

export const NavbarContainer = styled(Container)`
display:flex;
justify-content:space-between;
background-color:#00ff00;
display:flex;
width:50%
${Container}
`;


