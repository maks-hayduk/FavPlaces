export interface IEnvironmentConfig {
  mapBoxKey: string;
}

export interface IAppConfig {
  isDevelopment: boolean;
}

export type IConfig =  IAppConfig & IEnvironmentConfig;
