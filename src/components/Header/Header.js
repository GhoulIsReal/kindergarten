import React from "react";
import styled from "styled-components";
import headerlogo from "./logo.jpg";

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
  align-content: center;
`;

const HeaderAnchorsContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const HeaderAnchorHolder = styled.div`
  width: 12.5vw;
  height: auto;
	background-color: rgba(77, 134, 141, 1);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeaderAnchor = styled.a`
  color: #ffffff;
  font-weight: 600;
	text-transform: uppercase;
	cursor: pointer;
`;

const HeaderLogo = styled.img`
  max-width: 7vw;
  min-width: 100px;
`;

const Header = () => {
  return (
    <div>
      <HeaderContentWrapper>
        <HeaderContent>
          <HeaderLogo src={headerlogo}></HeaderLogo>
          <HeaderAnchorsContainer>
            <HeaderAnchorHolder>
              <HeaderAnchor>О НАС</HeaderAnchor>
            </HeaderAnchorHolder>
            <HeaderAnchorHolder>
              <HeaderAnchor>ПРОГРАММЫ</HeaderAnchor>
            </HeaderAnchorHolder>
            <HeaderAnchorHolder>
              <HeaderAnchor>ПРЕИМУЩЕСТВА</HeaderAnchor>
            </HeaderAnchorHolder>
            <HeaderAnchorHolder>
              <HeaderAnchor>КОНТАКТЫ</HeaderAnchor>
            </HeaderAnchorHolder>
          </HeaderAnchorsContainer>
        </HeaderContent>
      </HeaderContentWrapper>
    </div>
  );
};

export default Header;
