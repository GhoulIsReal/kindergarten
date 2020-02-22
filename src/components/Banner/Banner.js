import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import * as styled from './BannerStyles';

const Banner = () => {
    return(
        <div>
            <styled.ContainerHeaderAndBanner>
                <styled.BannerHolder>
                    <styled.ShortTextAndFormHolder>
                        <styled.ShortAboutAndAgeScopeText>
                            <styled.ShortAbout><FormattedMessage id="mainScreen.shortAboutUsText"/></styled.ShortAbout>
                            <styled.AgeScopeText><FormattedHTMLMessage id="mainScreen.ageScopeText"/></styled.AgeScopeText>
                        </styled.ShortAboutAndAgeScopeText>
                        <styled.MainScreenFormHolder>
                            <styled.MainScreenInput type="text" placeholder="Имя и Фамилия"></styled.MainScreenInput>
                            <styled.MainScreenInput type="text" placeholder="Телефон(+7 (777) 792-848-24)"></styled.MainScreenInput>
                            <styled.MainScreenTextArea placeholder="Оставьте комментарий...(макс 150 символов)" maxLength="150"></styled.MainScreenTextArea>
                            <styled.MainScreenAlertAndSendButtonHolder>
                                <styled.MainScreenFormTextAlert><FormattedMessage id="mainScreen.formAlert"/>
                                    <styled.TextBlurredBG></styled.TextBlurredBG>
                                </styled.MainScreenFormTextAlert>
                                <styled.MainScreenAbbreviation title="Нажимая кнопку 'Отправить' Вы даете согласие на обработку своих персональных данных">
                                    <styled.MainScreenSendButton primary type="submit" value="Отправить"></styled.MainScreenSendButton>
                                </styled.MainScreenAbbreviation>
                            </styled.MainScreenAlertAndSendButtonHolder>
                        </styled.MainScreenFormHolder>
                    </styled.ShortTextAndFormHolder>
                </styled.BannerHolder>
            </styled.ContainerHeaderAndBanner>
        </div>
    )
};

export default Banner;