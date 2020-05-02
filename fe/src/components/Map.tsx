import ReactMapboxGl from 'react-mapbox-gl';

import config from 'config';

export const Map = ReactMapboxGl({
  accessToken: config.mapBoxKey
});
