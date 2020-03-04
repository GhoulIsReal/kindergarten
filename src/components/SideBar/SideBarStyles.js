import styled from 'styled-components';
import media from '../../mediaQueries';

const SideBarItself = styled.div`
    width: 50vw;
    position: fixed;
    height: 70vh;
    background: #FFF;
    position: fixed;
    right: 0;
    top: 0;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    ${media.mobileL`
        width: 102vw;
    `}
`;

const SideBarMenu = styled.div`
    transform: scale(1.0, 1.0);
    height: 60vh;
    width: 40vw;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 40px;
`;

const SideBarAnchors = styled.p`
    color: #262835;
    margin: 0;
    font-family: 'Gilroy-Light';
    font-weight: 600;
    font-size: 35px;
    cursor: pointer;
    text-decoration: none;
`;

export {
    SideBarItself,
    SideBarMenu,
    SideBarAnchors
}