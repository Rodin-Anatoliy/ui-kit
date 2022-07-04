import type { IColor, IColors } from './colorSchemes';
import { colorSchemes } from './colorSchemes';
import type { IDevices } from './devices';
import { devices } from './devices';
import type { IFonts } from './fonts';
import { fonts } from './fonts';
import type { IShadows } from './shadows';
import { shadows } from './shadows';

export const defaultTheme = {
  colors: {
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
    },
  },
  text: {
    primary: '#0a0a0a',
    secondary: '#fff',
    tertiary: colorSchemes.green.default,
    disabled: '#ccc',
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
  fonts: IFonts;
  devices: IDevices;
  screenSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
}
