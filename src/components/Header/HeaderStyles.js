import styled from 'styled-components';

const HeaderContentWrapper = styled.div`
  width: 100vw;
  height: 11.5vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: #FFF;
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
  text-decoration: none;
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
  font-size: 0.911458vw;
  color: rgb(204, 162, 228);
`;

const HeaderLogoSmallText = styled(HeaderLogoLargeText)`
  max-height: 35%;
  font-family: 'Comfortaa', cursive;
  font-size: 0.651043vw;
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
  font-family: 'Gilroy-Light';
  font-weight: 600;
  font-size: 1.302081vw;
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
  text-decoration: none;
`;

const HeaderContactsAnchor = styled(HeaderAnchor)`
  padding: 10px 23px;
  border: 2px solid rgb(204, 162, 228);
  font-family: 'Gilroy-ExtraBold';
  border-radius: 50px;
  background: rgb(204, 162, 228);
  color: #FFF;
  font-weight: bold;
  &:hover {
    background-color: #BB4FAB;
    border-color: #BB4FAB;
    transition: all .4s;
  }
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

export {
    HeaderContentWrapper,
    HeaderContent,
    HeaderLogoAndTextHolder,
    HeaderLogoLargeText,
    HeaderLogo,
    HeaderLogoTextHolder,
    HeaderLogoSmallText,
    HeaderAnchorsContainer,
    HeaderAnchor,
    HeaderContactsAnchor,
    HeaderAnchorSpan
}