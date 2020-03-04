import styled from 'styled-components';
import mainImage from './mainpicture.jfif';
import blurredCover from './beige.jfif';
import media from '../../mediaQueries';

const BannerHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url(${mainImage}) center center no-repeat;  
    background-size: 100% auto;
    ${media.ipadLandscape`
        background-size: 100% 100%;
    `}
    ${media.ipadPortrait`
        height: 67vh;
        align-items: flex-end;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 85vh;
        width: 100vw;
        background: url(${mainImage}) top right no-repeat;  
        background-size: cover;
    }
    ${media.mobileL`
        height: 840px;
        width: 100vw;
        background: url(${mainImage}) center right no-repeat;  
        background-size: cover;
        justify-content: flex-end;
    `}
    ${media.mobileS`
        height: 900px;
    `}
`;

const ShortTextAndFormHolder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75vw;
    height: 80%;
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        flex-flow: column;
        width: 90vw;
        justify-content: space-around;
    }
    ${media.mobileL`
        flex-flow: column;
        width: 90vw;
        height: 100%;
        justify-content: flex-end;
    `}
`;

const ShortAboutAndAgeScopeText = styled.div`
    display: flex;
    flex-flow: column;
    height: 60%;
    width: 33.8vw;
    padding-left: 2.25vw;
    ${media.ipadPortrait`
        padding-left: 1.25vw;
        height: 88%;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 35%;
        width: 80vw;
    }
    ${media.mobileL`
        width: 100%;
        height: auto;
    `}
`;

const ShortAbout = styled.p`
    margin: 0 0 2.7vw 0;
    font-family: 'Gilroy-Light';
    font-weight: 600;
    font-size: 2.99479vw;
    line-height: 3.4vw;
    color: #FFF;
    ${media.ipadPortrait`
        font-size: 35px;
        line-height: 48px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        font-size: 44px;
    }
    ${media.mobileL`
        width: 100%;
    `}
`;

const AgeScopeText = styled(ShortAbout)`
    font-size: 1.43229vw;
    line-height: 2.4vw;
    color: #f39;
    ${media.ipadPortrait`
        font-size: 20px;
        line-height: 30px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        font-size: 25px;
    }
`;

const MainScreenFormHolder = styled(ShortAboutAndAgeScopeText)`
    width: 31.38vw;
    padding-left: 0;
    align-items: flex-end;
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        width: 60vw;
        height: 60vh;
    }
    ${media.mobileL`
        height: 400px;
        align-items: flex-start;
        margin-top: 40px;
        margin-bottom: 60px;
    `}
`;

const MainScreenInput = styled.input`
    width: 90.5%;
    height: 3.1vw;
    font-size: 1.11vw;
    background-color: transparent;
    border-radius: .27vw;
    border: .0972222222vw solid #fff;
    line-height: 3.472vw;
    padding: 0 1.38vw;
    color: #FFF;
    font-family: 'Gilroy-Light';
    margin-bottom: 20px;
    ::placeholder {
        color: #FFF;
    }
    &:focus {
        outline: none;
    }
    ${media.ipadPortrait`
        font-size: 16px;
        height: 50px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 60px;
        font-size: 20px;
    }
    ${media.mobileL`
        height: 60px;
        font-size: 18px;
    `}
    ${media.mobileM`
        border: .12vw solid #fff;
    `}
    ${media.mobileS`
        border: .15vw solid #fff;
    `}
`;

const MainScreenTextArea = styled.textarea`
    height: 7vw;
    width: 90.5%;
    padding: 0 1.38vw;
    margin-bottom: 20px;
    background-color: transparent;
    font-family: 'Gilroy-Light';
    font-size: 1.11vw;
    border-radius: .27vw;
    border: .0972222222vw solid #fff;
    color: #FFF;
    ::placeholder {
        color: #FFF;
    }
    &:focus {
        outline: none;
    }
    ${media.ipadPortrait`
        height: 9vw;
        font-size: 16px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 130px;
        font-size: 20px;
    }
    ${media.mobileL`
        height: 120px;
        font-size: 18px;
    `}
    ${media.mobileM`
        border: .12vw solid #fff;
    `}
    ${media.mobileS`
        border: .15vw solid #fff;
    `}
`;

const MainScreenAlertAndSendButtonHolder = styled.div`
    display: flex;
    width: 100%;
    height: 3.4vw;
    justify-content: space-between;
    ${media.ipadPortrait`
        height: 43px;
        margin-bottom: 27px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 60px;
        width: 57vw;
    }
    ${media.mobileL`
        width: 93.5%;
        height: 60px;
    `}
`;

const TextBlurredBG = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: url(${blurredCover}) center center no-repeat; 
    filter: blur(5px);
    z-index: -1;
`;

const EmptyDiv = styled.div``;

const MainScreenFormTextAlert = styled.div`
    position: relative;
    height: 100%;
    width: 55%;
    margin: 0;
    border-radius: .27vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const FormAlertTextHolder = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Gilroy-Light';
    font-size: 0.976561vw;
    font-weight: 600;
    color: #F39;
    ${media.ipadPortrait`
        font-size: 12.5px;
    `}
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        font-size: 14px;
    }
`;

const MainScreenAbbreviation = styled.abbr`
    width: 40%;
    height: 100%;
`;

const MainScreenSendButton = styled(MainScreenInput)`
    width: 100%;
    height: 100%;
    font-family: 'Gilroy-ExtraBold';
    margin-bottom: 0;
    cursor: pointer;
    &:hover {
        background-color: #FFF;
        color: #f39;
        transition: all .3s ease;
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 60px;
    }
`;

const MainScreenPolicy = styled.p`
    display: none;
    ${media.ipadPortrait`
        display: block;
        margin: 0;
        font-size: 14px;
        width: 95%;
        font-family: 'Roboto';
        color: #FFF;
    `}
`

export {
    BannerHolder,
    ShortTextAndFormHolder,
    ShortAboutAndAgeScopeText,
    ShortAbout,
    AgeScopeText,
    MainScreenFormHolder,
    MainScreenInput,
    MainScreenTextArea,
    MainScreenAlertAndSendButtonHolder,
    FormAlertTextHolder,
    TextBlurredBG,
    EmptyDiv,
    MainScreenFormTextAlert,
    MainScreenAbbreviation,
    MainScreenSendButton,
    MainScreenPolicy
}