import * as React from 'react';

import { ToggleMenuStatus, IPlaceModel } from 'store';
import { BurgerIcon, DoubleShewron, PlaceItem } from 'components';
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
  padding: 15px;

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

  .favorite-place-block {
    margin-top: 50px;
  }
`;

interface ISideBarProps {
  isMenuOpen: boolean;
  toggleMenuStatus: ToggleMenuStatus;
  places: IPlaceModel[];
}

const SideBar: React.FC<ISideBarProps> = ({ toggleMenuStatus, isMenuOpen, places }) => {
  return (
    <>
      {!isMenuOpen && (
        <div className="burger-btn" onClick={() => toggleMenuStatus(true)}>
          <BurgerIcon />
        </div>
      )}
      <Wrapper isMenuOpen={isMenuOpen}>
        <div className="close-side-bar-btn" onClick={() => toggleMenuStatus(false)}>
          <DoubleShewron />
        </div>
        <div className="favorite-place-block">
          {places?.map(place => (
            <PlaceItem 
              key={String(place.id)}
              place={place}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default SideBar;
