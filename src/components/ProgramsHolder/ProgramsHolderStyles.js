import styled from 'styled-components';
import background from './Untitled.jpg';

const ProgramsWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100vw;
    height: auto;
    background: url(${background}) center center no-repeat;  
    background-size: 100% auto;
`;

const ProgramsHolderHeadingKeeper = styled.div`
    margin: 3.4vw 0 30px 0;
    width: 50vw;
    display: flex;
    justify-content: flex-end;
`;

const ProgramsHolderHeading = styled.p`
    margin: 0;
    font-family: 'Gilroy-ExtraBold';
    font-size: 3vw;
`;

const ProgramsHoldingDiv = styled.div`
    width: 65vw;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-left: 18vw;
    height: auto;
`;

export {
    ProgramsWrapper,
    ProgramsHolderHeadingKeeper,
    ProgramsHolderHeading,
    ProgramsHoldingDiv
}