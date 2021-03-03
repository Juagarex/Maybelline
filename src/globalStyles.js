import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
    box-sizing:border-box;
    padding:0;
    margin:0;
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


export default GlobalStyle