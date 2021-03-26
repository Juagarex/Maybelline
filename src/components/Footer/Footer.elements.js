import styled from 'styled-components'
import {Link} from 'react-router-dom'



export const FooterContainer = styled.footer`
background-color:#ffcfcf;
width: 100%;
height: 150px;
display: flex;
flex-direction:column;
justify-content: space-around;
align-items: center;
font-weight:1.2rem;
padding-bottom:25px;
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

export const FooterIcon = styled.div`
width:70px;
height:70px;
border-radius:50%;
background-image:url(${props => props.DataImage});
background-color:#E85E99;
background-size:70%;
background-repeat: no-repeat;
object-fit:contain;
background-position:center;
cursor: pointer;
display:flex;
margin-right:15px;
transition:'box-shadow 1seg';

&:hover{
    box-shadow: 2px 2px 22px 0px rgba(196,2,196,1);
}
`;