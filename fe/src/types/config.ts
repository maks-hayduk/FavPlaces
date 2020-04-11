export interface IEnvironmentConfig {
  mapBoxKey: string;
  apiUrl: string;
}

export interface IAppConfig {
  isDevelopment: boolean;
}

export type IConfig =  IAppConfig & IEnvironmentConfig;
