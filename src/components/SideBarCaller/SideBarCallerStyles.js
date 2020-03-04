import styled from 'styled-components';
import media from '../../mediaQueries';

const SideBarCallerHolder = styled.div`
  height: 55px;
  width: 50px;
  position: relative;
  z-index: 1;
  user-select: none;
  display: flex;
  flex-flow: column;
  justify-content: center;
  ${media.mobileL`
    height: 40px;
  `}
`;

export { 
    SideBarCallerHolder
};
