import styled from 'styled-components';
import media from '../../mediaQueries';

const ProgramItself = styled.div`
    width: 65vw;
    height: 46vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7vh;
    padding: 0 20px;
    background-color: #faf5ff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    ${media.ipadPortrait`
        width: 75vw;
        height: 40vh;
        margin-bottom: 5vh;
    `}
`;

const ProgramImg = styled.img`
    height: auto;
    width: 15vw;
    border-radius: 50%;
    border: solid rgb(204,162,228) 10px;
    ${media.ipadPortrait`
        width: 25vw;
    `}
`;

const ProgramSectionRightCol = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    width: 45vw;
    height: 80%;
`;

const ProgramHeading = styled.p`
    text-align: left;
    font-family: 'Gilroy-ExtraBold';
    font-size: 2.2vw; 
    margin: 0;
    width: 100%;
    cursor: default;
    ${media.ipadPortrait`
        font-size: 33px; 
    `}
`;

const ProgramDescription = styled.div`
    text-align: left;
    width: 100%;
    cursor: default;
    font-family: 'Gilroy-Light';
    font-size: 1.3vw;
    height: fit-content;
    color: #4e4e4e;
    ${media.ipadLandscape`
        font-size: 20px;
    `}
`;

export {
    ProgramItself,
    ProgramImg,
    ProgramSectionRightCol,
    ProgramHeading,
    ProgramDescription
}