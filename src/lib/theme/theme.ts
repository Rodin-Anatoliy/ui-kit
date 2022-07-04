import type { IColor, IColors } from './colorSchemes';
import { colors, colorSchemes } from './colorSchemes';
import type { IDevices } from './devices';
import { devices } from './devices';
import type { IFonts } from './fonts';
import { fonts } from './fonts';
import type { IShadows } from './shadows';
import { shadows } from './shadows';

export const defaultTheme = {
  colors: {
    ...colors,
  },
  text: {
    primary: '#0a0a0a',
    secondary: colors.white,
    tertiary: colors.green.default,
    disabled: colors.gray,
    unActive: colors.dark_gray,
  },
  hint: {
    default: '#525252',
  },
  menu: {
    hover: '#525252',
    active: '#1c1c1c',
  },
  shadow: shadows,
  error: {
    ...colorSchemes.red,
  },
  success: {
    ...colorSchemes.green,
  },
  fonts: {
    ...fonts,
  },
  devices: {
    ...devices,
  },
  screenSize: {
    xs: 320,
    sm: 768,
    md: 992,
    lg: 1024,
  },
};

export interface ITheme {
  colors: IColors;
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    unActive: string;
  };
  hint: {
    default: string;
  };
  menu: {
    hover: string;
    active: string;
  };
  shadow: IShadows;
  error: IColor;
  success: IColor;
  fonts: IFonts;
  devices: IDevices;
  screenSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
}
