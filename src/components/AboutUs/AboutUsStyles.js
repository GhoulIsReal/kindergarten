import styled from 'styled-components';


const AboutUsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
    height: 100vh;
`;

const AboutUsContent = styled.div`
    display: flex;
    flex-flow: column;
    width: 50vw;
    height: 48%;
    justify-content: space-between;
    margin-bottom: 10%;
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
    AboutUsContent,
    AboutUsCaption,
    AboutUsText
}