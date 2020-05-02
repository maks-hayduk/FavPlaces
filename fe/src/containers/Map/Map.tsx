import * as React from 'react';
import { ImmutableObjectMixin } from 'seamless-immutable';
import ReactMapboxGL, { Layer, Feature, Popup, Marker, Cluster, MapContext } from 'react-mapbox-gl';

import { Map, Button } from 'components';
import { styled } from 'theme';
import { GetFeatureDataAction, IFeature } from 'store';
import { Coords } from 'types';

interface IMapContainer {
  getFeatureDataAction: GetFeatureDataAction;
  currentFeature: IFeature;
}

const MapContainer: React.FC<IMapContainer> = ({ getFeatureDataAction, currentFeature }) => {
  const [mapCenter, setMapCenter] = React.useState<Coords>([24.03354921447226, 49.83588835908614]);

  return (
    <Map
      zoom={[16]}
      center={mapCenter}
      style="mapbox://styles/mapbox/streets-v9"
      onClick={(_, event: any) => {
        getFeatureDataAction(Object.values(event.lngLat) as Coords);
      }}
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >{currentFeature.id ? (
      <Popup
        coordinates={currentFeature.center.asMutable()}
      >
        <h1>{currentFeature.text}</h1>
      </Popup>
    ) : <></>}
    </Map>
  );
};

export default MapContainer;
