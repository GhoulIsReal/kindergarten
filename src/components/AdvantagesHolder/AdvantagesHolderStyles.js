import styled from 'styled-components';
import advantagesCover from './asf.jfif';
import { TextBlurredBG } from '../Banner/BannerStyles';
import whiteBg from '../Advantage/whiteBG.png';

const AdvantagesSectionHolder = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100vw;
    height: auto;
    background: url(${advantagesCover}) center bottom no-repeat;  
    background-size: cover;
`;

const AdvantagesHeading = styled.div`
    margin: 90px 0 30px 0;
    width: 45vw;
    height: 7vh;
    font-family: 'Gilroy-ExtraBold';
    font-size: 3vw;
    text-align: center;
    z-index: 1;
    position: relative;
`;

const AdvantagesBlurredBG = styled(TextBlurredBG)`
    background: url(${whiteBg}) center center no-repeat; 
`;

const AdvantagesHolderBlock = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
`;

const AdvantagesHolder = styled.div`
    width: 75vw;
    height: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 23.3vw));
    grid-template-rows: repeat(auto-fit, calc(36.02vh - 25px));
    grid-gap: 50px 2.5vw;
`;

export {
    AdvantagesSectionHolder,
    AdvantagesHeading,
    AdvantagesBlurredBG,
    AdvantagesHolderBlock,
    AdvantagesHolder
}