import styled, {createGlobalStyle} from 'styled-components'
import PrimaryFont from './Fonts/sriracha.ttf';
import SecondaryFont from './Fonts/Comic.ttf';
import Melanie from './Fonts/Melanie.ttf'


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
    
    @font-face {
        font-family: 'Sriracha';
        src: url(${PrimaryFont})
    }
    @font-face {
        font-family:'Comic Boy';
        src: url(${SecondaryFont})
    }
    @font-face {
        font-family:'Melanie';
        src: url(${Melanie})
    }
}
`;

export const Container = styled.div`
z-index:1;
width:100%;
max-width: width 1300px;
margin-right:auto;
margin-left:auto;
padding-right:50px;
padding-left:50px;

@media screen and (max-width:990px){
    padding-left:30px;
    padding-right:30px;
}
`;

export const Button = styled.button`
border-radius: 4px;
background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
white-space: nowrap;
padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
}
@media screen and (max-width: 960px) {
    width: 100%;
}
`;


export default GlobalStyle