import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as styled from './FooterStyles';
import whatsapp from './whatsapp.svg';
import instagramIcon from './instagram.svg';

const Footer = () => {
    return (
        <div>
            <styled.FooterHolder>
                <styled.Footer>
                    <styled.FooterIconsHolder>
                        <styled.FooterIconAnchor target="_blank" href="https://api.whatsapp.com/send?phone=77757900170"><styled.FooterIcon src={whatsapp}></styled.FooterIcon></styled.FooterIconAnchor>
                        <styled.FooterIconAnchor target="_blank" href="https://www.instagram.com/dochkisynochki_kz/"><styled.FooterIcon src={instagramIcon}></styled.FooterIcon></styled.FooterIconAnchor>
                    </styled.FooterIconsHolder>
                    <styled.FooterCopyright><FormattedMessage id="footer.copyright"/></styled.FooterCopyright>
                </styled.Footer>
            </styled.FooterHolder>
        </div>
    )
}

export default Footer;