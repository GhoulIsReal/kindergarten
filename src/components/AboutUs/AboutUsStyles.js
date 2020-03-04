import styled from 'styled-components';
import cover from './aboutUsCover.jpg';
import media from '../../mediaQueries';
import ipadCover from './ipadCover.jpg';
import mobileCover from './mobileCover.jpg'


const AboutUsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
    height: 88.5vh;
    background: url(${cover}) center center no-repeat;  
    background-size: cover;
    ${media.ipadLandscape`
        height: 68.5vh;
    `}
    ${media.ipadPortrait`
        height: 60vh;
        background: url(${ipadCover}) center center no-repeat;  
        background-size: 100% auto;
    `}
    @media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
        height: 100vh;
    }
        @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        background: url(${mobileCover}) center center no-repeat;  
        background-size: 100% auto;
        height: 100vh;
    }
    ${media.mobileL`
        background: url(${mobileCover}) center center no-repeat;  
        height: 130vh;
        background-size: cover;
    `}
    ${media.mobileS`
        height: 180vh;
    `}
`;

const AboutUsContentHolder = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const AboutUsContent = styled.div`
    display: flex;
    flex-flow: column;
    width: 50vw;
    height: 62%;
    justify-content: space-between;
    ${media.ipadLandscape`
        height: 55%;
    `}
    ${media.ipadPortrait`
        height: 60%;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 68%;
    }
    ${media.mobileL`
        width: 75vw;
        height: 70%;
    `}
    ${media.mobileS`
        justify-content: space-around;
    `}
`;

const AboutUsCaption = styled.p`
    margin: 0;
    width: 100%;
    height: fit-content;
    font-family: 'Gilroy-ExtraBold';
    font-size: 3vw; 
    text-align: center;
    ${media.ipadPortrait`
        font-size: 46px;
    `}
    ${media.mobileL`
        font-size: 36px;
    `}
    ${media.mobileM`
        font-size: 33px;
    `}
`;

const AboutUsText = styled(AboutUsCaption)`
    font-family: 'Gilroy-Light';
    font-size: 1.9302vw;
    line-height: 2.2vw;
    ${media.ipadPortrait`
        font-size: 24px;
        line-height: 33px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        font-size: 26px;
    }
    ${media.mobileL`
        font-size: 20px;
    `}
    ${media.mobileM`
        font-size: 18px;
    `}
    ${media.mobileS`
        font-size: 16px;
    `}
`;


export {
    AboutUsSection,
    AboutUsContentHolder,
    AboutUsContent,
    AboutUsCaption,
    AboutUsText
}