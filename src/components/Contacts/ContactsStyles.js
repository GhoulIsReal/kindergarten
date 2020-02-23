import styled from 'styled-components';
import cover from './paragraphcover.jpg';

const ContactsSection = styled.div`
    width: 100vw;
    height: 59.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7fafc;
`;

const ContactsHolder = styled.div`
    width: 75vw;
    height: 54.5vh;
    display flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
`;

const ContactsHeading = styled.p`
    margin: 0;
    color: #333333;
    font-family: 'Gilroy-ExtraBold';
    font-size: 3vw;
    height: 7vh;
    width: 40vw;
    text-align: center;
`;

const ContactsAndMapHolder = styled.div`
    width: 75vw;
    height: 45vh;
    display flex;
    justify-content: space-between;
    align-items: center;
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
`; 

const ContactsAddress = styled.p`
    margin: 0 0 50px 0;
    width: 100%;
    font-family: 'Roboto';
    font-size: 2.6vw;
    font-weight: 500;
    color: #333333;
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