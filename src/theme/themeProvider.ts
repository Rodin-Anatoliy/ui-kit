import { createTheming } from '@callstack/react-theme-provider';
import type { ITheme } from 'theme';
import { defaultTheme } from 'theme';

export const { ThemeProvider, withTheme, useTheme } =
  createTheming<ITheme>(defaultTheme);
