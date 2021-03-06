import * as React from 'react';

import { ControlWrapper, Modal, ExitIcon } from 'components';
import { styled } from 'theme';
import { HandleLogoutAction, IUserDataSelect, HandleUpdateUserAction } from 'store';

import { renderModalByType, ProfileModalConsts } from './Modals/Main';

const ProfileControlsWrapper = styled.div`
  position: absolute;
  padding: 25px 30px 0 0;
  right: 0;
  z-index: 50;

  display: flex;

  .profile-btn {
    margin-right: 10px;
  }

  .exit-button {
    padding: 0 5px;
  }
`;

interface IProfileControlsProps {
  handleLogoutAction: HandleLogoutAction;
  userData: IUserDataSelect;
  handleUpdateUserAction: HandleUpdateUserAction;
}

const ProfileControls: React.FC<IProfileControlsProps> = (props) => {
  const { handleLogoutAction } = props;
  const [modalType, setModalType] = React.useState<ProfileModalConsts | null>(null);

  return (
    <Modal
      renderModalContent={(_, setIsOpen) => renderModalByType(modalType, { ...props, setIsOpen })}
      renderComponentContent={(_, setIsOpen) => (
        <ProfileControlsWrapper>
          <ControlWrapper 
            isDanger={false} 
            className="profile-btn"
            onClick={() => {
              setIsOpen(true);
              setModalType(ProfileModalConsts.Profile);
            }}
          >
            Profile
          </ControlWrapper>
          <ControlWrapper 
            className="exit-button"
            isDanger={true} 
            onClick={handleLogoutAction}
          >
            <ExitIcon />
          </ControlWrapper>
        </ProfileControlsWrapper>
      )}
    />
  );
};

export default ProfileControls;
