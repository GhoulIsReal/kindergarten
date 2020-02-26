import styled from 'styled-components';
import cover from './aboutUsCover.jpg';
import media from '../../mediaQueries';
import mobileCover from './mobileCover.jpg';


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
        background: url(${mobileCover}) center center no-repeat;  
        background-size: 100% auto;
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
`;

const AboutUsText = styled(AboutUsCaption)`
    font-family: 'Gilroy-Light';
    font-size: 1.9302vw;
    line-height: 2.2vw;
    ${media.ipadPortrait`
        font-size: 24px;
        line-height: 33px;
    `}
`;


export {
    AboutUsSection,
    AboutUsContentHolder,
    AboutUsContent,
    AboutUsCaption,
    AboutUsText
}