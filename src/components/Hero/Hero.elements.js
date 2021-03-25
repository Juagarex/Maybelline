import styled from 'styled-components'
import {heroHome} from '../../pages/HomePage/Data'

export const HeroContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
height:70vh;
width:100%;
background-color:#f0d1f0;
`;

export const HeroBanner =styled.div`
position:absolute;
align-self:flex-end;
justify-content:center;
width:420px;
height:60px;
font-family:'Comic Boy';
font-size:90px;
letter-spacing:2px;
line-height:45px;
color:#3F0808;
font-weight:400
`;

export const HeroImage =styled.div`
width:100%;
height:100%;

background-image:url(${heroHome.Hero});
background-size:cover;
background-repeat: no-repeat;
object-fit:contain;
background-position:center;
`;

// export const Img=styled.img`
// border: 0;
// max-width: 100%;
// display: inline-block;
// max-height: 100%;
// `;