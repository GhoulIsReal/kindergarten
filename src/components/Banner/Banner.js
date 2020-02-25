import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import * as styled from './BannerStyles';
import Form from '../Form/Form';

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
                        <Form />
                    </styled.ShortTextAndFormHolder>
                </styled.BannerHolder>
            </styled.ContainerHeaderAndBanner>
        </div>
    )
};

export default Banner;