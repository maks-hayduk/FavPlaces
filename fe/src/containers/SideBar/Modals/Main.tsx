import * as React from 'react';

import { DeletePlaceModal } from './DeletePlaceModal';
import { UpdatePlaceModal } from './UpdatePlaceModal';

export enum SideBarModalConsts {
  DeletePlace = 'deletePlace',
  UpdatePlace = 'updatePlace'
}

export const renderModalByType = (type: SideBarModalConsts | null, props: any) => {
  switch (type) {
    case SideBarModalConsts.DeletePlace:
      return <DeletePlaceModal {...props} />;

    case SideBarModalConsts.UpdatePlace:
      return <UpdatePlaceModal {...props} />

    default:
      return <></>;
  }
};
