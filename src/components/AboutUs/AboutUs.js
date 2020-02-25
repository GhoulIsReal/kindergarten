import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as styled from './AboutUsStyles';

const AboutUs = () => {
    return(
        <div>
            <styled.AboutUsSection name="aboutUs">
                <styled.AboutUsContentHolder>
                    <styled.AboutUsContent>
                        <styled.AboutUsCaption><FormattedMessage id="mainScreen.aboutUs"/></styled.AboutUsCaption>
                        <styled.AboutUsText><FormattedMessage id="aboutUs.text"/></styled.AboutUsText>
                    </styled.AboutUsContent>
                </styled.AboutUsContentHolder>
            </styled.AboutUsSection>
        </div>
    )
}

export default AboutUs;