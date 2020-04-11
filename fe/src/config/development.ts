import { IEnvironmentConfig } from 'types';

const { REACT_APP_MAPBOX_KEY: mapBoxKey, REACT_APP_API_URL: apiUrl } = process.env;

export default Object.freeze({
  mapBoxKey,
  apiUrl
}) as IEnvironmentConfig;
