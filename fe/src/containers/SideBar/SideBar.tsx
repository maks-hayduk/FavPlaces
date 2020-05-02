import * as React from 'react';

import { ToggleMenuStatus } from 'store';
import { BurgerIcon, DoubleShewron } from 'components';
import { styled } from 'theme';

interface IWrapperProps {
  isMenuOpen: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  height: 100vh;
  width: 340px;
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 100;

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
`;

interface ISideBarProps {
  isMenuOpen: boolean;
  toggleMenuStatus: ToggleMenuStatus;
}

const SideBar: React.FC<ISideBarProps> = ({ toggleMenuStatus, isMenuOpen }) => {
  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleClick = React.useCallback((e: any) => {
    if (menuRef && menuRef.current && !menuRef.current.contains(e.target)) {
      toggleMenuStatus(false);
    }
  }, [menuRef]);

  React.useEffect(() => {
    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <>
      {!isMenuOpen && (
        <div className="burger-btn" onClick={() => toggleMenuStatus(true)}>
          <BurgerIcon />
        </div>
      )}
      <Wrapper isMenuOpen={isMenuOpen} ref={menuRef}>
        <div className="close-side-bar-btn" onClick={() => toggleMenuStatus(false)}>
          <DoubleShewron />
        </div>
      </Wrapper>
    </>
  );
};

export default SideBar;
