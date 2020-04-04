import { IEnvironmentConfig } from 'types';

const { REACT_APP_MAPBOX_KEY: mapBoxKey } = process.env;

export default Object.freeze({
  mapBoxKey
}) as IEnvironmentConfig;
