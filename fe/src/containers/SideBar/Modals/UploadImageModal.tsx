import * as React from 'react';

import { H3, Button, TextButton, FileBase64 } from 'components';
import { styled } from 'theme';
import { IPlaceModel, HandleUploadImagesAction } from 'store';
import { IFileInfo } from 'types';

const Wrapper = styled.div`
  width: 320px;
  padding: 20px;

  .delete-title {
    text-align: center;
    margin-bottom: 20px;
  }

  .place-title {
    text-align: center;
    margin-bottom: 20px;
  }

  .upload-image {
    display: flex;
    justify-content: center;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    button {
      margin: 0 10px;
    }
  }
`;

interface IUploadImageModalProps {
  selectedPlace: IPlaceModel;
  setIsOpen: (val: boolean) => void;
  handleUploadImagesAction: HandleUploadImagesAction;
}

export const UploadImageModal: React.FC<IUploadImageModalProps> = ({ 
  selectedPlace,
  setIsOpen,
  handleUploadImagesAction
}) => {
  const [images, setImages] = React.useState<IFileInfo[]>([]);

  return selectedPlace.id ? (
    <Wrapper>
      <H3 className="delete-title">Add picture to this place</H3>
      <p className="place-title">{selectedPlace.title}</p>
      <div className="upload-image">
        <FileBase64 
          isMultiple={true}
          onChange={(val) => setImages(val)}
        />
      </div>
      <div className="buttons">
        <Button 
          className="delete-button"
          onClick={async () => {
            await handleUploadImagesAction(images, Number(selectedPlace.id));
            // setIsOpen(false);
          }}
        >
          Upload
        </Button>
        <TextButton onClick={() => setIsOpen(false)}>Cancel</TextButton>
      </div>
    </Wrapper>
  ) : null;
};
