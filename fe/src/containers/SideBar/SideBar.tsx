import * as React from 'react';

import { BurgerIcon, DoubleShewron } from 'components';
import { styled } from 'theme';

interface IWrapperProps {
  isMenuOpen: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  position: absolute;

  z-index: 9999;

  .burger-btn {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .side-bar-content {
    height: 100vh;
    width: 340px;
    position: relative;
    background-color: ${({ theme }) => theme.color.white};

    ${({ isMenuOpen }) =>
      isMenuOpen
        ? `
      transform: translateX(0);
      transition: transform 0.5s ease-in-out;
    `
        : `
      transform: translateX(-100%);
      transition: transform 0.5s ease-in-out;
    `}

    .close-side-bar-btn {
      cursor: pointer;
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }
`;

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpened] = React.useState<boolean>(false); 

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <div className="burger-btn" onClick={() => setIsMenuOpened(true)}>
        <BurgerIcon />
      </div>
      <div className="side-bar-content">
        <div className="close-side-bar-btn" onClick={() => setIsMenuOpened(false)}>
          <DoubleShewron />
        </div>
      </div>
    </Wrapper>
  );
};

export default SideBar;
