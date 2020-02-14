import React from "react";
import styled from "styled-components";
import headerlogo from "./logo.jpg";
import { FormattedMessage } from 'react-intl';

const HeaderContentWrapper = styled.div`
  width: 100vw;
  height: auto;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  width: 75vw;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogoAndTextHolder = styled.div`
  display: flex;
  align-items: center;
  width: 17vw;
  min-width: 250px;
`;

const HeaderLogo = styled.img`
  width: 7vw;
  min-width: 100px;
`;

const HeaderLogoTextHolder = styled.div`
  width: 10vw;
  min-width: 145px;
  max-height: 145px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogoLargeText = styled.p`
  max-width: 100%;
  max-height: 65%;
  margin: 0;
  font-family: 'Lobster', cursive;
  font-size: .875rem;
  color: rgb(204, 162, 228);
`;

const HeaderLogoSmallText = styled(HeaderLogoLargeText)`
  max-height: 35%;
  font-family: 'Comfortaa', cursive;
  font-size: .625rem;
  color: rgb(149, 149, 149);
`;

const HeaderAnchorsContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: auto;
`;

const HeaderAnchor = styled.a`
  color: #262835;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  cursor: pointer;
  padding: 15px 10.5px 5px 10.5px;
  display: flex;
  flex-flow: column;
	justify-content: center;
  align-items: center;
  margin-left: 25px;
  border-bottom: 2px solid #fff;
  --color-light: #eefbfb;
  --color-main: rgb(204, 162, 228);
`;

const HeaderAnchorSpan = styled.span`
  z-index: -1;
  position: relative;
  left: 0;
  display: block;
  width: 100%;
  bottom: 0;
  height: .4em;
  &:before {
    content: "";
    height: 100%;
    bottom: -1px;
    background: linear-gradient(90deg,hsla(0,0%,100%,0) 0,var(--color-main) 25%,var(--color-main) 75%,hsla(0,0%,100%,0));
    z-index: -1;
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    opacity: 0;
    transition: opacity .1s .3s,-webkit-transform .4s;
    transform: scaleX(0) translateZ(0);
    ${HeaderAnchor}:hover & {
      opacity: 1;
      transform: scale(1) translateZ(0);
      transition: opacity .1s 0s,-webkit-transform .4s cubic-bezier(.39,.575,.565,1);
    }
  }
`;

const Header = () => {
  return (
    <div>
      <HeaderContentWrapper>
        <HeaderContent>
          <HeaderLogoAndTextHolder>
            <HeaderLogo src={headerlogo}></HeaderLogo>
            <HeaderLogoTextHolder>
              <HeaderLogoLargeText><FormattedMessage id="homepage.logoLargeText" /></HeaderLogoLargeText>
              <HeaderLogoSmallText><FormattedMessage id="homepage.logoSmallText" /></HeaderLogoSmallText>
            </HeaderLogoTextHolder>
          </HeaderLogoAndTextHolder>
          <HeaderAnchorsContainer>
            <HeaderAnchor>
              <FormattedMessage id="homepage.aboutUs" />
              <HeaderAnchorSpan></HeaderAnchorSpan>
            </HeaderAnchor>
            <HeaderAnchor>
              <FormattedMessage id="homepage.programs" />
              <HeaderAnchorSpan></HeaderAnchorSpan>
            </HeaderAnchor>
            <HeaderAnchor>
              <FormattedMessage id="homepage.advantages" />
              <HeaderAnchorSpan></HeaderAnchorSpan>
            </HeaderAnchor>
            <HeaderAnchor>
              <FormattedMessage id="homepage.contacts" />
              <HeaderAnchorSpan></HeaderAnchorSpan>
            </HeaderAnchor>
          </HeaderAnchorsContainer>
        </HeaderContent>
      </HeaderContentWrapper>
    </div>
  );
};

export default Header;

