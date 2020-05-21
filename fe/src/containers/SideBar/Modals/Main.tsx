import * as React from 'react';

import { DeletePlaceModal } from './DeletePlaceModal';
import { SharePlaceModal } from './SharePlaceModal';
import { UpdatePlaceModal } from './UpdatePlaceModal';
import { DeleteSharePlaceModal } from './DeleteSharePlaceModal';
import { UploadImageModal } from './UploadImageModal';

export enum SideBarModalConsts {
  DeletePlace = 'deletePlace',
  UpdatePlace = 'updatePlace',
  SharePlace = 'sharePlace',
  DeleteSharePlace = 'deleteSharePlace',
  UploadImage = 'uploadImage'
}

export const renderModalByType = (type: SideBarModalConsts | null, props: any) => {
  switch (type) {
    case SideBarModalConsts.DeletePlace:
      return <DeletePlaceModal {...props} />;

    case SideBarModalConsts.UpdatePlace:
      return <UpdatePlaceModal {...props} />;

    case SideBarModalConsts.SharePlace:
      return <SharePlaceModal {...props} />;

    case SideBarModalConsts.DeleteSharePlace:
      return <DeleteSharePlaceModal {...props} />;

    case SideBarModalConsts.UploadImage:
      return <UploadImageModal {...props} />;

    default:
      return <></>;
  }
};
