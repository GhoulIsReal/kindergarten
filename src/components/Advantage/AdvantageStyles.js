import styled from 'styled-components';

const AdvantageCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 89%;
    padding: 1.99vh 1.1591vw;
    position: relative;
    z-index: 1;
`;

const AdvantageCardHeading = styled.p`
    font-family: 'Gilroy-ExtraBold';
    font-size: 1.171878vw;
    margin: 0;
    width: 100%;
    cursor: default;
`;

const AdvantageCardDescription = styled(AdvantageCardHeading)`
    font-family: 'Gilroy-Light';
    font-size: 1vw;
    height: 70%;
    color: #4e4e4e;
`;

export {
    AdvantageCard,
    AdvantageCardHeading,
    AdvantageCardDescription
}