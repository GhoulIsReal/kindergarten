import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as styled from './FooterStyles';
import facebookIcon from './facebook-logo.svg';
import instagramIcon from './instagram.svg';

const Footer = () => {
    return (
        <div>
            <styled.FooterHolder>
                <styled.Footer>
                    <styled.FooterIconsHolder>
                        <styled.FooterIconAnchor href="/"><styled.FooterIcon src={facebookIcon}></styled.FooterIcon></styled.FooterIconAnchor>
                        <styled.FooterIconAnchor href="/"><styled.FooterIcon src={instagramIcon}></styled.FooterIcon></styled.FooterIconAnchor>
                    </styled.FooterIconsHolder>
                    <styled.FooterCopyright><FormattedMessage id="footer.copyright"/></styled.FooterCopyright>
                </styled.Footer>
            </styled.FooterHolder>
        </div>
    )
}

export default Footer;