import { createGlobalStyle } from 'styled-components';
import GilroyLight from './Gilroy-Light.otf';
import GilroyLightWoff from './Gilroy-Light.woff';
import GilroyLightWoff2 from './Gilroy-Light.woff2';
import GilroyExtraBold from './Gilroy-ExtraBold.otf';
import GilroyExtraBoldWoff from './Gilroy-ExtraBold.woff';
import GilroyExtraBoldWoff2 from './Gilroy-ExtraBold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Gilroy-Light';
        src: local('Gilroy-Light'),
        url(${GilroyLight}),
        url(${GilroyLightWoff}),
        url(${GilroyLightWoff2});
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy-ExtraBold';
        src: local('Gilroy-ExtraBold'),
        url(${GilroyExtraBold}),
        url(${GilroyExtraBoldWoff}),
        url(${GilroyExtraBoldWoff2});
    }
`;