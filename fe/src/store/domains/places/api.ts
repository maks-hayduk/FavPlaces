import config from 'config';
import { mapApiService } from 'services';
import { Coords } from 'types';

export const getFeatureData = (coords: Coords) => 
  mapApiService.get(`/geocoding/v5/mapbox.places/${coords[0]},${coords[1]}.json?access_token=${config.mapBoxKey}&types=poi`);
