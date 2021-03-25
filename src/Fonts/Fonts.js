import { createGlobalStyle } from 'styled-components';
import PrimaryFont from './Sriracha.ttf';
import SecondaryFont from './ComicBoy.ttf';
import Melanie from './Melanie.ttf'


export const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: 'Sriracha';
        src: url(${PrimaryFont})
    }
    @font-face {
        font-family:'Comic Boy';
        src: local('Comic Boy'), local('Comic Boy'), url(${SecondaryFont}) format('ttf');
        font-weight:600;
        font-style:normal;
    }
    @font-face {
        font-family:'Melanie';
        src: local('Melanie'), url(${Melanie}) format('ttf');
        font-weight:600;
        font-style:normal;
    }
`;

