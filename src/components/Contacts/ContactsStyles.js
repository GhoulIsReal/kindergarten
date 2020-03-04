import styled from 'styled-components';
import cover from './paragraphcover.jpg';
import media from '../../mediaQueries';

const ContactsSection = styled.div`
    width: 100vw;
    height: 59.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7fafc;
    ${media.ipadPortrait`
        height: 64.5vh;
    `}
    @media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
        height: 87.5vh;
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 70.5vh;
    }
    ${media.mobileL`
        height: 100vh;
    `}
    ${media.mobileM`
        height: 120vh;
    `}
    ${media.mobileS`
        height: 130vh;
    `}
`;

const ContactsHolder = styled.div`
    width: 75vw;
    height: 54.5vh;
    display flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
    ${media.ipadPortrait`
        height: 59.5vh;
    `}
    @media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
        height: 80.5vh;
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 63.5vh;
    }
    ${media.mobileL`
        height: 85vh;
        width: 80vw;
    `}
    ${media.mobileM`
        height: 105vh;
    `}
    ${media.mobileS`
        height: 115vh;
    `}
`;

const ContactsHeading = styled.p`
    margin: 0;
    color: #333333;
    font-family: 'Gilroy-ExtraBold';
    font-size: 3vw;
    height: 7vh;
    width: 40vw;
    text-align: center;
    ${media.ipadPortrait`
        font-size: 36px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        width: 75vw;
    }
    ${media.mobileL`
        width: 100%;
        font-size: 32px;
    `}
    ${media.mobileM`
        font-size: 28px;
    `}
`;

const ContactsAndMapHolder = styled.div`
    width: 75vw;
    height: 45vh;
    display flex;
    justify-content: space-between;
    align-items: center;
    ${media.ipadPortrait`
        height: 50vh;
        flex-flow: column;
    `}
    @media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
        height: 74vh;
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 53vh;
    }
    ${media.mobileL`
        height: 74vh;
        width: 80vw;
    `}
    ${media.mobileM`
        height: 94vh;
    `}
`;

const ContactsParagraphsDiv = styled.div`
    width: 45%;
    height: 35vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 1.7vw;
    background: url(${cover}) center center no-repeat; 
    ${media.ipadPortrait`
        width: 76%;
        height: 25vh;
    `}
    @media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
        height: 28vh;
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        width: 100%;
    }
    ${media.mobileL`
        width: 100%;
        height: auto;
    `}
`; 

const ContactsAddress = styled.p`
    margin: 0 0 50px 0;
    width: 100%;
    font-family: 'Roboto';
    font-size: 2.6vw;
    font-weight: 500;
    color: #333333;
    ${media.ipadPortrait`
        font-size: 40px;
    `}
    ${media.mobileM`
        font-size: 33px;
    `}
`;

const CommunicType = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
`; 

const CommunicTypeLabel = styled.p`
    font-size: 1.7vw;
    width: 30%;
    font-family: 'Open Sans';
    margin: 0;
    color: #333333;
    font-weight: 500;
    ${media.ipadPortrait`
        font-size: 26px;
    `}
    ${media.mobileL`
        width: 40%;
    `}
    ${media.mobileM`
        font-size: 23px;
    `}
    ${media.mobileS`
        font-size: 19px;
    `}
`;

const CommunicInfo = styled(CommunicTypeLabel)`
    font-family: 'Gilroy-Light';
    width: 35%;
    ${media.mobileL`
        width: 57%;
        margin-left: 3%;
    `}
    ${media.mobileS`
        font-size: 21px;
    `}
`;


export {
    ContactsSection,
    ContactsHolder,
    ContactsHeading,
    ContactsAndMapHolder,
    ContactsParagraphsDiv,
    ContactsAddress,
    CommunicType,
    CommunicTypeLabel,
    CommunicInfo
}