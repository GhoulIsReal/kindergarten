import styled from 'styled-components';
import cover from './aboutUsCover.jpg';


const AboutUsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
    height: 88.5vh;
    background: url(${cover}) center center no-repeat;  
    background-size: 100% 100%;
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
    height: 55%;
    justify-content: space-between;
`;

const AboutUsCaption = styled.p`
    margin: 0;
    width: 100%;
    height: fit-content;
    font-family: 'Gilroy-ExtraBold';
    font-size: 3vw; 
    text-align: center;
`;

const AboutUsText = styled(AboutUsCaption)`
    font-family: 'Gilroy-Light';
    font-size: 1.9302vw;
`;


export {
    AboutUsSection,
    AboutUsContentHolder,
    AboutUsContent,
    AboutUsCaption,
    AboutUsText
}