import styled from 'styled-components';
import advantagesCover from './asf.jfif';
import { TextBlurredBG } from '../Banner/BannerStyles';
import whiteBg from '../Advantage/whiteBG.png';
import media from '../../mediaQueries';

const AdvantagesSectionHolder = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100vw;
    height: auto;
    background: url(${advantagesCover}) center bottom no-repeat;  
    background-size: cover;
`;

const AdvantagesHeading = styled.div`
    margin: 90px 0 30px 0;
    width: 50vw;
    height: 7vh;
    font-family: 'Gilroy-ExtraBold';
    font-size: 3vw;
    text-align: center;
    z-index: 1;
    position: relative;
    ${media.ipadPortrait`
        width: 55vw;
        height: 50px;
        font-size: 36px;
        margin: 90px 0 60px 0;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        width: 75vw;
    }
    ${media.mobileL`
        width: 85vw;
        font-size: 32px;
        height: auto;
    `}
    ${media.mobileM`
        font-size: 28px;
    `}
`;

const AdvantagesBlurredBG = styled(TextBlurredBG)`
    background: url(${whiteBg}) center center no-repeat; 
`;

const AdvantagesHolderBlock = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    ${media.ipadPortrait`
        height: 100vh;
    `}
    @media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
        height: 185vh;
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: auto;
    }
    ${media.mobileL`
        height: auto;
    `}
`;

const AdvantagesHolder = styled.div`
    width: 75vw;
    height: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 23.3vw));
    grid-template-rows: repeat(auto-fit, calc(36.02vh - 25px));
    grid-gap: 50px 2.5vw;
    ${media.ipadPortrait`
        grid-template-columns: repeat(auto-fit, 359px);
        grid-template-rows: repeat(auto-fit, 400px);
        grid-gap: 50px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        grid-template-columns: repeat(auto-fit, 75vw);
        grid-template-rows: repeat(5, 400px);
        margin-bottom: 50px;
    }
    ${media.mobileL`
        grid-template-columns: repeat(auto-fit, 80vw);
        grid-template-rows: repeat(6, 350px);
        height: auto;
        margin-bottom: 50px;
    `}
    ${media.mobileS`
        grid-template-columns: repeat(auto-fit, 85vw);
        grid-template-rows: repeat(6, 370px);
    `}
`;

export {
    AdvantagesSectionHolder,
    AdvantagesHeading,
    AdvantagesBlurredBG,
    AdvantagesHolderBlock,
    AdvantagesHolder
}