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
    default: '#00EF8F',
    half_opacity: 'rgba(0,239,143, 0.5)',
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
  };
  white: string;
  black: string;
  gray: string;
  dark_gray: string;
  dark_gray_light: string;
  dark_white: string;
  white_smoke: string;
}
