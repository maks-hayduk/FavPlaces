import * as React from 'react';
import { Layer, Feature, Popup, Marker, Cluster } from 'react-mapbox-gl';

import { Map } from 'components';
import { styled } from 'theme';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const clusterMarker = (coordinates: [number, number]) => (
  <Marker coordinates={coordinates}></Marker>
);

interface IMapContainer {}

const MapContainer: React.FC<IMapContainer> = ({  }) => {

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} onClick={(e: any) => console.log(e)}/>
      </Layer>
      <Popup
        coordinates={[-0.481747846041145, 51.3233379650232]}
      >
        <h1>Popup</h1>
      </Popup>
    </Map>
  );
};

export default MapContainer;


{/* <Cluster ClusterMarkerFactory={clusterMarker}>
  {
    places.features.map((feature, key) =>
      <Marker
        key={key}
        style={styles.marker}
        coordinates={feature.geometry.coordinates}
        onClick={this.onMarkerClick.bind(this, feature.geometry.coordinates)}>
        M
      </Marker>
    )
  }
</Cluster> */}