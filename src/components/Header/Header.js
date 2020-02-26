import React, { useState, useEffect } from "react";
import headerlogo from "./logo.jpg";
import { FormattedMessage } from "react-intl";
import * as styled from "./HeaderStyles";
import { Link } from "react-scroll";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  });

  const updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    setWidth(windowWidth);
  };

  const sidebarCollappsed = width > 1024;

  return (
    <div>
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
            >
              <styled.HeaderContactsAnchor>
                <FormattedMessage id="mainScreen.contacts" />
              </styled.HeaderContactsAnchor>
            </Link>
          </styled.HeaderAnchorsContainer>
          ) : ("")}
        </styled.HeaderContent>
      </styled.HeaderContentWrapper>
    </div>
  );
};

export default Header;
