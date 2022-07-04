import './main.css';
import './styles/typography.styles.css';

import { Button } from './components/Button';
import { CheckBox, Radio, Switch } from './components/Controls';
import { Icon, IconNames } from './components/Icon';
import {
  DropdownInput,
  NumberCounter,
  NumberInput,
  PasswordInput,
  SelectInput,
  TextAreaInput,
  TextInput,
} from './components/Input';
import { Counter, ProgressBar, Tag } from './components/Tag';
import { Tooltip } from './components/Tooltip';
import { Card } from './components/Widgets/Card';
import { Modal } from './components/Widgets/Modal';
import { Typography } from './styles/typographyNames';
import type { ITheme } from './theme';
import { ThemeProvider, useTheme, withTheme } from './theme';

export {
  Button,
  CheckBox,
  Radio,
  Switch,
  NumberCounter,
  NumberInput,
  PasswordInput,
  TextAreaInput,
  TextInput,
  SelectInput,
  DropdownInput,
  Tooltip,
  Card,
  Modal,
  Icon,
  IconNames,
  ThemeProvider,
  useTheme,
  withTheme,
  Tag,
  Counter,
  ProgressBar,
};
export type { ITheme };

export { Typography };
