import React from "react";
import headerlogo from "./logo.jpg";
import { FormattedMessage } from 'react-intl';
import * as styled from './HeaderStyles';

const Header = () => {
  return (
    <div>
      <styled.HeaderContentWrapper>
        <styled.HeaderContent>
          <styled.HeaderLogoAndTextHolder>
            <styled.HeaderLogo src={headerlogo}></styled.HeaderLogo>
            <styled.HeaderLogoTextHolder>
              <styled.HeaderLogoLargeText><FormattedMessage id="mainScreen.logoLargeText" /></styled.HeaderLogoLargeText>
              <styled.HeaderLogoSmallText><FormattedMessage id="mainScreen.logoSmallText" /></styled.HeaderLogoSmallText>
            </styled.HeaderLogoTextHolder>
          </styled.HeaderLogoAndTextHolder>
          <styled.HeaderAnchorsContainer>
            <styled.HeaderAnchor>
              <FormattedMessage id="mainScreen.aboutUs" />
              <styled.HeaderAnchorSpan></styled.HeaderAnchorSpan>
            </styled.HeaderAnchor>
            <styled.HeaderAnchor>
              <FormattedMessage id="mainScreen.programs" />
              <styled.HeaderAnchorSpan></styled.HeaderAnchorSpan>
            </styled.HeaderAnchor>
            <styled.HeaderAnchor>
              <FormattedMessage id="mainScreen.advantages" />
              <styled.HeaderAnchorSpan></styled.HeaderAnchorSpan>
            </styled.HeaderAnchor>
            <styled.HeaderContactsAnchor>
              <FormattedMessage id="mainScreen.contacts" />
            </styled.HeaderContactsAnchor>
          </styled.HeaderAnchorsContainer>
        </styled.HeaderContent>
      </styled.HeaderContentWrapper>
    </div>
  );
};

export default Header;

