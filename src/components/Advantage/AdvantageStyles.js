import styled from 'styled-components';
import media from '../../mediaQueries';

const AdvantageCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 89%;
    padding: 1.99vh 1.1591vw;
    position: relative;
    z-index: 1;
    ${media.ipadPortrait`
        justify-content: space-around;  
        padding: 1.99vh;
    `}
`;

const AdvantageCardHeading = styled.p`
    font-family: 'Gilroy-ExtraBold';
    font-size: 1.171878vw;
    margin: 0;
    width: 100%;
    cursor: default;
    ${media.ipadLandscape`
        font-size: 18px;
    `}
    ${media.ipadPortrait`
        font-size: 23px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        font-size: 30px;
    }
`;

const AdvantageCardDescription = styled.div`
    font-family: 'Gilroy-Light';
    font-size: 1vw;
    height: 70%;
    width: 100%;
    cursor: default;
    color: #4e4e4e;
    ${media.ipadLandscape`
        font-size: 15px;
    `}
    ${media.ipadPortrait`
        font-size: 20px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        font-size: 25px;
    }
    ${media.mobileM`
        font-size: 18px;
    `}
`;

export {
    AdvantageCard,
    AdvantageCardHeading,
    AdvantageCardDescription
}