import styled from 'styled-components';

const ProgramItself = styled.div`
    width: 65vw;
    height: 40.75vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7vh;
`;

const ProgramImg = styled.img`
    height: auto;
    width: 15vw;
    border-radius: 50%;
    border: solid rgb(204,162,228) 10px;
`;

const ProgramSectionRightCol = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 45vw;
    height: 80%;
`;

const ProgramHeading = styled.p`
    text-align: left;
    font-family: 'Gilroy-ExtraBold';
    font-size: 2.5vw; 
    margin: 0;
    width: 100%;
`;

const ProgramDescription = styled(ProgramHeading)`
    font-family: 'Gilroy-Light';
    font-size: 1.6vw;
    height: fit-content;
    color: #4e4e4e;
`;

export {
    ProgramItself,
    ProgramImg,
    ProgramSectionRightCol,
    ProgramHeading,
    ProgramDescription
}