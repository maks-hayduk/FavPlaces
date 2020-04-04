export interface ITheme {
  color: {
    primary: string;
    primaryDarker: string;
    primaryDark: string;
    primaryLight: string;
    primaryTransperacy: string;

    secondary: string;
    secondaryDark: string;
    secondaryLight: string;

    white: string;

    black: string;
    transparent: string;

    gray: string;
    iron: string;
    ironLight: string;
    
    red: string;
  };
}

export interface IThemeProps {
  theme: ITheme;
}

export const theme: ITheme = {
  color: {
    primary: '#1B98E0',
    primaryDarker: '#32a2e3',
    primaryDark: 'rgba(27,152,224 , 0.6)',
    primaryLight: '#8dccf0',
    primaryTransperacy: 'rgba(27,152,224, 0.1)',

    secondary: 'rgba(27,152,224 , 0.2)',
    secondaryDark: 'rgba(27,152,224 , 0.15)',
    secondaryLight: '#e8f4fc',

    black: '#1B1F3B',
    transparent: 'rgba(0, 0, 0, 0)',
    
    white: '#FFFFFF',

    gray: 'rgba(0, 0, 0, 0.25)',
    iron: 'rgba(25, 50, 63, 0.2)',
    ironLight: '#fafafa',

    red: '#E62652'
  }
};
