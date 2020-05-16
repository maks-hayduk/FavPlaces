import * as React from 'react';

import { 
  ToggleMenuStatus, 
  IPlaceModel, 
  SelectPlaceIdAction, 
  HandleDeletePlaceAction, 
  IAllTagsSelect, 
  HandleUpdatePlaceAction
} from 'store';
import { BurgerIcon, DoubleShewron, PlaceItem, Modal } from 'components';
import { styled } from 'theme';

import { renderModalByType, SideBarModalConsts } from './Modals/Main';

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
  places: any[];
  selectPlaceIdAction: SelectPlaceIdAction;
  selectedPlace: IPlaceModel | null;
  handleDeletePlaceAction: HandleDeletePlaceAction;
  allTags: IAllTagsSelect;
  handleUpdatePlaceAction: HandleUpdatePlaceAction;
}

const SideBar: React.FC<ISideBarProps> = (props) => {
  const { toggleMenuStatus, isMenuOpen, places, selectPlaceIdAction } = props;

  const [modalType, setModalType] = React.useState<SideBarModalConsts | null>(null);

  const handleClick = async (id: number, type: SideBarModalConsts, setIsOpen: (val: boolean) => void) => {
    await selectPlaceIdAction(id);
    setIsOpen(true);
    setModalType(type);
  };

  return (
    <Modal
      renderModalContent={(_, setIsOpen) => renderModalByType(modalType, { ...props, setIsOpen })}
      renderComponentContent={(_, setIsOpen) => (
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
                  onDeleteClick={() => {
                    handleClick(Number(place.id), SideBarModalConsts.DeletePlace, setIsOpen);
                  }}
                  onUpdateClick={() => {
                    handleClick(Number(place.id), SideBarModalConsts.UpdatePlace, setIsOpen);
                  }}
                />
              ))}
            </div>
          </Wrapper>
        </>
      )}
    />
  );
};

export default SideBar;
