import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const FooterContainer = styled.footer`
background-color:#ffcfcf;
width: 100%;
height: 150px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
font-weight:1.2rem;
`;

export const FooterMenu = styled.ul`
width:80%;
height: 90px;
display:flex;
justify-content:center;
align-items:center;
list-style:none;
text-align: center;
`;

export const FooterItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;
&:hover{
    border-bottom:2px solid #4b59f7;
}
`;

export const FooterLink = styled(Link)`
font-family:'Comic Boy';
font-size:28px;
font-weight:100;
color:#3F0808;
display:flex;
align-items:center;
text-decoration: none;
padding:0.5rem 1rem;
height:100%;
`;