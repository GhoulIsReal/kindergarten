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
`;

const CommunicInfo = styled(CommunicTypeLabel)`
    font-family: 'Gilroy-Light';
    width: 35%;
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