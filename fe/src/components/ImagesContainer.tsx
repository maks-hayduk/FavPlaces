import * as React from 'react';

import { ArrowLeftIcon, ArrowRightIcon, DeleteItemIcon } from 'components';
import { styled } from 'theme';
import { HandleDeleteImageAction, IImageInfo} from 'store';

import { IPlaceInfo } from '../containers/Map/Map';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 150;

  .image-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
    
    .image-title {

      .align-image-header {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
          color: ${({ theme }) => theme.color.white};
          text-align: center;
        }
      }

      .image {
        max-height: 90vh;
        max-width: 70vw;
      }
    }

    .arrow:hover {
      fill: ${({ theme }) => theme.color.primary};
      cursor: pointer;
    }

    .arrow:active {
      fill: ${({ theme }) => theme.color.primaryLight};
      cursor: pointer;
    }
  }

  .no-images {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.color.white};
  }

  .delete-image {
    cursor: pointer;
  }

  .delete-image: hover {
    fill: ${({ theme }) => theme.color.lightRed};
  }
`;

interface IImagesContainerProps {
  placeImages: IPlaceInfo;
  setPlaceImages: (val: IPlaceInfo) => void;
  handleDeleteImageAction: HandleDeleteImageAction;
}

export const ImagesContainer: React.FC<IImagesContainerProps> = ({ placeImages, setPlaceImages, handleDeleteImageAction }) => {
  const [imageIndex, setImageIndex] = React.useState<number>(0);
  const [allImages, setAllImages] = React.useState<IImageInfo[] | null>(null);

  const imagesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (placeImages.data?.images) {
      setAllImages(placeImages.data.images);
    }
  }, [placeImages]);
  
  const handleLeftClick = React.useCallback(() => {
    if (imageIndex === 0) {
      setImageIndex(Number(allImages?.length) - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }, [allImages, imageIndex]);

  const handleRightClick = React.useCallback(() => {
    if (imageIndex === Number(allImages?.length) - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }, [allImages, imageIndex]);

  const handleClick = React.useCallback((e: any) => {
    if (!imagesRef.current?.contains(e.target)) {
      setPlaceImages({ show: false, data: null });
    }
  }, [imagesRef]);

  const deleteClick = async () => {
    const selectedImage = allImages![imageIndex];
    const isDeleted = await handleDeleteImageAction(Number(placeImages.data?.id), selectedImage.id);

    if (await isDeleted) {
      setAllImages(allImages!.filter(image => image.id !== selectedImage.id));
      setImageIndex(0);
    }
  };

  return placeImages.data && (
    <Wrapper onClick={handleClick}>
      <div className="image-container" ref={imagesRef}>
        {allImages && allImages.length > 0 ? (
          <>
            <ArrowLeftIcon className="arrow" onClick={handleLeftClick}/>
            <div className="image-title">
              <div className="align-image-header">
                <p className="title">{allImages?.[imageIndex].name}</p>
                <DeleteItemIcon className="delete-image" onClick={deleteClick}/>
              </div>
              <img 
                className="image"
                src={String(allImages?.[imageIndex].base64)}
              />
            </div>
            <ArrowRightIcon className="arrow" onClick={handleRightClick}/>
          </>
        ) : (
          <p className="no-images">There are no images yet</p>
        )}
      </div>
    </Wrapper>
  );
};
