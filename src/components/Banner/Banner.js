import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import mainImage from './mainpicture.jfif';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const ContainerHeaderAndBanner = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column;
`;

const BannerHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex: 1;
    background: url(${mainImage}) center center no-repeat;  
    background-size: 100% auto;
`;

const ShortTextAndFormHolder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75vw;
    height: 80%;
`;

const ShortAboutAndAgeScopeText = styled.div`
    display: flex;
    flex-flow: column;
    height: 60%;
    width: 33.8vw;
    padding-left: 2.25vw;
`;

const ShortAbout = styled.p`
    margin: 0 0 2.7vw 0;
    font-family: 'Gilroy-Light';
    font-weight: 600;
    font-size: 44px;
    color: #FFF;
`;

const AgeScopeText = styled(ShortAbout)`
    font-size: 20px;
    color: #f39;
`;

const MainScreenFormHolder = styled(ShortAboutAndAgeScopeText)`
    width: 31.38vw;
    padding-left: 0;
    align-items: flex-end;
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
`;

const MainScreenTextArea = styled.textarea`
    height: 90px;
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
`;

const MainScreenSendButton = styled(MainScreenInput)`
    width: 40%;
    font-family: 'Gilroy-ExtraBold';
    margin-bottom: 0;
    cursor: pointer;
    &:hover {
        background-color: #FFF;
        color: #f39;
        transition: all .3s ease;
    }
`;

const Banner = () => {
    return(
        <div>
            <ContainerHeaderAndBanner>
                <Header></Header>
                <BannerHolder>
                    <ShortTextAndFormHolder>
                        <ShortAboutAndAgeScopeText>
                            <ShortAbout><FormattedMessage id="mainScreen.shortAboutUsText"/></ShortAbout>
                            <AgeScopeText><FormattedHTMLMessage id="mainScreen.ageScopeText"/></AgeScopeText>
                        </ShortAboutAndAgeScopeText>
                        <MainScreenFormHolder>
                            <MainScreenInput type="text" placeholder="Имя и Фамилия"></MainScreenInput>
                            <MainScreenInput type="text" placeholder="Телефон(+7 (777) 792-848-24)"></MainScreenInput>
                            <MainScreenTextArea placeholder="Оставьте комментарий...(макс 150 символов)" maxLength="150"></MainScreenTextArea>
                            <MainScreenSendButton primary type="submit" value="Отправить"></MainScreenSendButton>
                        </MainScreenFormHolder>
                    </ShortTextAndFormHolder>
                </BannerHolder>
            </ContainerHeaderAndBanner>
        </div>
    )
};

export default Banner;