import * as React from 'react';
import { Popup } from 'react-mapbox-gl';

import { H3, TagWrapper, CrossIcon } from 'components';
import { IPlaceModel, ISharePlaceModel } from 'store';
import { styled } from 'theme';

import { IPlaceInfo } from './Map';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  position: relative;
  padding: 15px;

  .title {
    text-align: center;
  }

  .place-tags {
    margin-top: 10px;
    display: flex;
    justify-content: center;

    .tag {
      display: inline;
      padding: 4px 6px;
    }
  }

  .cross-button {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .place-description {
    margin-top: 10px;
    text-align: center;
  }

  .shared-by {
    text-align: center;
  }
`;

interface IPlaceInfoPopUp {
  placeInfo: any | null;
  setPlaceInfo: (val: IPlaceInfo) => void;
}

export const PlaceInfoPopUp: React.FC<IPlaceInfoPopUp> = ({ placeInfo, setPlaceInfo }) => {
  console.log(placeInfo)
  
  return placeInfo && (
    <Popup
      coordinates={[placeInfo.latitude, placeInfo.longtitude]}
    >
      <Wrapper>
        <CrossIcon className="cross-button" onClick={() => setPlaceInfo({ show: false, data: null })}/>
        <H3 className="title">{placeInfo.title}</H3>
        {placeInfo.email && (
          <p className="shared-by">Shared by: {placeInfo.email}</p>
        )}
        {placeInfo && (placeInfo as any).tags?.length > 0 ? (
          <div className="place-tags">
            {(placeInfo as any).tags.map((tag: any) => (
              <TagWrapper className="tag" key={String(tag.id)}>{tag.label}</TagWrapper>
            ))}
          </div>
        ) : null}
        {placeInfo.description && placeInfo.description !== 'null' ? (
          <p className="place-description">{placeInfo.description}</p>
        ) : null}
      </Wrapper>
    </Popup>
  );
};
