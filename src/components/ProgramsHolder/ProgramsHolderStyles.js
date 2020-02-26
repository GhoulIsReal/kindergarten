import styled from 'styled-components';
import background from './Untitled.jpg';
import media from '../../mediaQueries';

const ProgramsWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100vw;
    height: auto;
    background: url(${background}) center center no-repeat;  
    background-size: 100% 100%;
`;

const ProgramsHolderHeadingKeeper = styled.div`
    margin: 90px 0 30px 0;
    width: 47.5vw;
    display: flex;
    justify-content: flex-end;
    ${media.ipadLandscape`
        justify-content: center;
    `}
`;

const ProgramsHolderHeading = styled.p`
    margin: 0;
    font-family: 'Gilroy-ExtraBold';
    font-size: 3vw;
    ${media.ipadPortrait`
        font-size: 46px;
    `}
`;

const ProgramsHoldingDiv = styled.div`
    width: 65vw;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-left: 18vw;
    height: auto;
    ${media.ipadLandscape`
        margin-left: 0;
    `}
    ${media.ipadPortrait`
        width: 75vw;
    `}
`;

export {
    ProgramsWrapper,
    ProgramsHolderHeadingKeeper,
    ProgramsHolderHeading,
    ProgramsHoldingDiv
}