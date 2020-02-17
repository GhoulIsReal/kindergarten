import { createGlobalStyle } from 'styled-components';
import GilroyLight from './Gilroy-Light.otf';
import GilroyExtraBold from './Gilroy-ExtraBold.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Gilroy-Light';
        src: local('Gilroy-Light'),
        url(${GilroyLight});
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy-ExtraBold';
        src: local('Gilroy-ExtraBold'),
        url(${GilroyExtraBold});
    }
`;