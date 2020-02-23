import styled from 'styled-components';

const FooterHolder = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: #f7fafc;
`;

const Footer = styled.div`
    width: 40vw;
    height: 135px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
`;

const FooterIconsHolder = styled.div`
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: space-between;
`;

const FooterIconAnchor = styled.a`
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

const FooterIcon = styled.img`
    width: 100%;
    height: 100%;
`;

const FooterCopyright = styled.p`
    width: 100%;
    margin: 0;
    height: 30px;
    text-align: center;
    font-family: 'Gilroy-Light';
    font-weight: 600;
    font-size: 1.042vw;
    color: #8c8989;
`;

export {
    FooterHolder,
    Footer,
    FooterIconsHolder,
    FooterCopyright,
    FooterIconAnchor,
    FooterIcon
}