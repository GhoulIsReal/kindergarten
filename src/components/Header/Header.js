import React from "react";
import headerlogo from "./logo.jpg";
import { FormattedMessage } from "react-intl";
import * as styled from "./HeaderStyles";
import { Link } from 'react-scroll';
import SideBarCaller from '../SideBarCaller/SideBarCaller';

const preventMobileHeaderScroll = {
  height: '100px',
  position: 'fixed',
}

const Header = ({ sidebarCollappsed }) => {
  return (
    <div style={{ height: preventMobileHeaderScroll.height, position: preventMobileHeaderScroll.position, top: '0', left: '0', zIndex: '3' }}>
      <styled.HeaderContentWrapper>
        <styled.HeaderContent>
          <styled.HeaderLogoAndTextHolder as="a" href="/">
            <styled.HeaderLogo src={headerlogo}></styled.HeaderLogo>
            <styled.HeaderLogoTextHolder>
              <styled.HeaderLogoLargeText>
                <FormattedMessage id="mainScreen.logoLargeText" />
              </styled.HeaderLogoLargeText>
              <styled.HeaderLogoSmallText>
                <FormattedMessage id="mainScreen.logoSmallText" />
              </styled.HeaderLogoSmallText>
            </styled.HeaderLogoTextHolder>
          </styled.HeaderLogoAndTextHolder>
          {sidebarCollappsed ? (
          <styled.HeaderAnchorsContainer>
            <Link 
              activeClass="active"
              to="aboutUs"
              smooth={true}
              duration={500}
              style={{ marginLeft: '25px' }}
            >
              <styled.HeaderAnchor>
                <FormattedMessage id="mainScreen.aboutUs" />
                <styled.HeaderAnchorSpan></styled.HeaderAnchorSpan>
              </styled.HeaderAnchor>
            </Link>
            <Link
              activeClass="active"
              to="programs"
              smooth={true}
              duration={700}
              style={{ marginLeft: '25px' }}
            >
              <styled.HeaderAnchor>
                <FormattedMessage id="mainScreen.programs" />
                <styled.HeaderAnchorSpan></styled.HeaderAnchorSpan>
              </styled.HeaderAnchor>
            </Link>
            <Link
              activeClass="active"
              to="advantages"
              smooth={true}
              duration={900}
              style={{ marginLeft: '25px' }}
            >
              <styled.HeaderAnchor>
                <FormattedMessage id="mainScreen.advantages" />
                <styled.HeaderAnchorSpan></styled.HeaderAnchorSpan>
              </styled.HeaderAnchor>
            </Link>
            <Link
              activeClass="active"
              to="contacts"
              smooth={true}
              duration={900}
              style={{ marginLeft: '25px' }}
            >
              <styled.HeaderContactsAnchor>
                <FormattedMessage id="mainScreen.contacts" />
              </styled.HeaderContactsAnchor>
            </Link>
          </styled.HeaderAnchorsContainer>
          ) : (<SideBarCaller />)}
        </styled.HeaderContent>
      </styled.HeaderContentWrapper>
    </div>
  );
};

export default Header;
