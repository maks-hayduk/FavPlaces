import * as React from 'react';
import ReactMapboxGL, { Layer, Feature, Popup, Marker, Cluster, MapContext } from 'react-mapbox-gl';

import { Map, Button } from 'components';
import { GetPlacesAction, HandleAddPlaceAction, IAllTagsSelect, GetTagsAction, GetSharedPlacesAction } from 'store';
import { Coords } from 'types';

import { AddPlacePopup } from './AddPlacePopUp';

const mapStyles = {
  height: '100vh',
  width: '100vw'
};

interface IMapContainer {
  handleAddPlaceAction: HandleAddPlaceAction;
  getPlacesAction: GetPlacesAction;
  allTags: IAllTagsSelect;
  getTagsAction: GetTagsAction;
  getSharedPlacesAction: GetSharedPlacesAction;
}

const MapContainer: React.FC<IMapContainer> = ({ 
  handleAddPlaceAction, 
  getPlacesAction, 
  allTags, 
  getTagsAction,
  getSharedPlacesAction
}) => {
  const [mapCenter, setMapCenter] = React.useState<Coords>([24.03354921447226, 49.83588835908614]);
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
      }}
      containerStyle={mapStyles}
    >{coords?.length ? (
      <AddPlacePopup
        allTags={allTags}
        coordinates={coords as [number, number]}
        onClick={(placeData) => {
          handleAddPlaceAction(placeData);
          setCoords(null);
        }}
      />
    ) : <></>}
    </Map>
  );
};

export default MapContainer;
