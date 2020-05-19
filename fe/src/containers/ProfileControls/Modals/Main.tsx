import * as React from 'react';

import { ProfileModal } from './ProfileModal';

export enum ProfileModalConsts {
  Profile = 'profile'
}

export const renderModalByType = (type: ProfileModalConsts | null, props: any) => {
  switch (type) {
    case ProfileModalConsts.Profile:
      return <ProfileModal {...props} />;

    default:
      return <></>;
  }
};
