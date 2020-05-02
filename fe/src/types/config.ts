export interface IEnvironmentConfig {
  mapBoxKey: string;
  mapBoxApiUrl: string;
  apiUrl: string;
}

export interface IAppConfig {
  isDevelopment: boolean;
}

export type IConfig =  IAppConfig & IEnvironmentConfig;
