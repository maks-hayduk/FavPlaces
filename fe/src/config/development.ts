import { IEnvironmentConfig } from 'types';

const { 
  REACT_APP_MAPBOX_KEY: mapBoxKey,
  REACT_APP_MAPBOX_API_URL: mapBoxApiUrl,
  REACT_APP_API_URL: apiUrl
} = process.env;

export default Object.freeze({
  mapBoxKey,
  apiUrl,
  mapBoxApiUrl
}) as IEnvironmentConfig;
