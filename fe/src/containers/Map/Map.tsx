import * as React from 'react';
import { Layer, Feature } from 'react-mapbox-gl';

import { Map } from 'components';
import { GetPlacesAction, HandleAddPlaceAction, IAllTagsSelect, GetTagsAction, GetSharedPlacesAction, IPlaceModel } from 'store';
import { Coords } from 'types';

import { AddPlacePopup } from './AddPlacePopUp';
import { PlaceInfoPopUp } from './PlaceInfoPopUp';

import { IFeatureInfo } from '../SideBar/SideBar';

const mapStyles = {
  height: '100vh',
  width: '100vw'
};

export interface IPlaceInfo {
  show: boolean;
  data: IPlaceModel | null;
}

interface IMapContainer {
  handleAddPlaceAction: HandleAddPlaceAction;
  getPlacesAction: GetPlacesAction;
  allTags: IAllTagsSelect;
  getTagsAction: GetTagsAction;
  getSharedPlacesAction: GetSharedPlacesAction;
  mapCenter: Coords;
  setMapCenter: (val: Coords) => void;
  allPlaces: any[];
  setPlaceInfo: (val: IPlaceInfo) => void;
  placeInfo: IPlaceInfo;
  featureInfo: IFeatureInfo;
}

const MapContainer: React.FC<IMapContainer> = ({ 
  handleAddPlaceAction, 
  getPlacesAction, 
  allTags, 
  getTagsAction,
  getSharedPlacesAction,
  mapCenter,
  allPlaces,
  setMapCenter,
  placeInfo,
  setPlaceInfo,
  featureInfo
}) => {
  const [coords, setCoords] = React.useState<[number, number] | null>(null);

  React.useEffect(() => {
    getPlacesAction();
    getTagsAction();
    getSharedPlacesAction();
  }, []);

  return (
    <Map
      zoom={[16]}
      center={mapCenter}
      style="mapbox://styles/mapbox/streets-v9"
      onClick={(_, event: any) => {
        setCoords(Object.values(event.lngLat) as [number, number]);
        setPlaceInfo({ show: false, data: null });
      }}
      containerStyle={mapStyles}
    >
      <>
        {coords && coords.length > 0 && (
          <AddPlacePopup 
            allTags={allTags}
            coordinates={coords as [number, number]}
            onClick={(placeData) => {
              handleAddPlaceAction(placeData);
              setCoords(null);
            }}
          />
        )}
        {allPlaces.length > 0 && (
          <Layer type="symbol" layout={{ 'icon-image': 'star-11', 'icon-size': 1.5 }}>
            {allPlaces.map(place => (
              <Feature
                key={String(place.id)} 
                coordinates={[place.latitude, place.longtitude]} 
                onClick={() => {
                  setCoords(null);
                  setMapCenter([place.latitude, place.longtitude]);
                  setPlaceInfo({ 
                    show: true,
                    data: place
                  });
                }}
              />
            ))}
          </Layer>
        )}
        {placeInfo.show && (
          <PlaceInfoPopUp 
            setPlaceInfo={setPlaceInfo}
            placeInfo={placeInfo.data}
          />
        )}
        {featureInfo.show && featureInfo.data && (
          <Layer type="symbol" layout={{ 'icon-image': 'triangle-15', 'icon-size': 2 }}>
            <Feature
              coordinates={featureInfo.data.center} 
            />
          </Layer>
        )}
      </>
    </Map>
  );
};

export default MapContainer;
