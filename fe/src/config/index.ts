import { IAppConfig, IConfig } from 'types';

const { NODE_ENV: mode } = process.env;

const isDevelopment = typeof mode === 'string' && mode === 'development';

const app: IAppConfig = {
  isDevelopment
};

let config: IConfig;

try {
  const envConfig = require(`./${mode}`).default;
  config = { ...app, ...envConfig };
} catch (e) {
  throw new Error('INVALID CONFIG FILE');
}

export default Object.freeze(config);
