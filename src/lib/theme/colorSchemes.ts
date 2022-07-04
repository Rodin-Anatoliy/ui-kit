export const colorSchemes: IColorSchemes = {
  blue: {
    default: '#269bf0',
    hovered: '#63b7f4',
    active: '#2f9ff1',
    disabled: '#cbe7fb',
    half_opacity: 'rgba(38, 155, 240, 0.16)',
  },
  orange: {
    default: '#FF974A',
    half_opacity: 'rgba(255, 151, 74, 0.2)',
  },
  light_green: {
    default: '#3DD598',
    half_opacity: 'rgba(61, 213, 152, 0.08)',
  },
  red: {
    default: '#DA5050',
    half_opacity: 'rgba(252, 90, 90, 0.08)',
  },
  green: {
    default: '#55AA64',
    hovered: '#99CCA2',
    active: '#55AA64',
    disabled: '#85C28F',
    half_opacity: '#d8e4da',
  },
};

export const colors: IColors = {
  ...colorSchemes,
  white: '#fff',
  black: '#1c1c1c',
  gray: '#ccc',
  dark_gray: '#7b7b7b',
  dark_gray_light: '#a3a3a3',
  dark_white: '#f8f8f8',
  white_smoke: '#f5f5f5',
  primary: {
    ...colorSchemes.green,
  },
  secondary: {
    negative: {
      ...colorSchemes.red,
    },
    positive: {
      ...colorSchemes.light_green,
    },
    accent: {
      ...colorSchemes.orange,
    },
    inProgress: {
      ...colorSchemes.blue,
    },
  },
};

export interface IColor {
  default: string;
  half_opacity: string;
  hovered?: string;
  active?: string;
  disabled?: string;
  focused?: string;
}

export interface IColorSchemes {
  blue: IColor;
  orange: IColor;
  red: IColor;
  green: IColor;
  light_green: IColor;
}

export interface IColors extends IColorSchemes {
  primary: IColor;
  secondary: {
    negative: IColor;
    positive: IColor;
    accent: IColor;
    inProgress: IColor;
  };
  white: string;
  black: string;
  gray: string;
  dark_gray: string;
  dark_gray_light: string;
  dark_white: string;
  white_smoke: string;
}
