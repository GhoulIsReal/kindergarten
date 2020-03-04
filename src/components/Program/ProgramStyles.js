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
    @media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
        height: 55vh;
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 50vh;
    }
    ${media.mobileL`
        width: 80vw;
        height: 370px;
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
    ${media.mobileL`
        display: none;
    `}
`;

const ProgramSectionRightCol = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    width: 45vw;
    height: 80%;
    @media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
        height: 90%;
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 90%;
    }
    ${media.mobileL`
        width: 100%;
        height: 90%;
    `}
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
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        font-size: 28px;
    }
    ${media.mobileL`
        font-size: 22px;
    `}
    ${media.mobileM`
        font-size: 20px;
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
    ${media.mobileL`
        font-size: 17px;
    `}
    ${media.mobileM`
        font-size: 16px;
    `}
    ${media.mobileS`
        font-size: 15px;
    `}
`;

export {
    ProgramItself,
    ProgramImg,
    ProgramSectionRightCol,
    ProgramHeading,
    ProgramDescription
}