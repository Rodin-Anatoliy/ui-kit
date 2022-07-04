import React, { useMemo } from 'react';

import type { ITheme } from '../../theme';
import { withTheme } from '../../theme';
import { Icon, IconNames } from '../Icon/Icon';
import { CounterIcon, StyledCounter } from './Tag.styles';

interface IBasicCounterProps {
  type?:
    | 'notification'
    | 'notification-mini'
    | 'attachment'
    | 'task-progress'
    | 'symbol';
  noMargin?: boolean;
  theme: ITheme;
}

interface ICounterProps extends IBasicCounterProps {
  value?: string;
  total?: string;
  text?: string;
}

const CustomCounter: React.FC<ICounterProps> = ({
  type,
  value,
  total,
  text,
  noMargin,
  theme,
  ...other
}) => {
  const count = useMemo(() => {
    if (value) {
      return total ? `${value}/${total}` : value;
    } else {
      return '';
    }
  }, [value, total]);

  const color = useMemo(() => {
    if (type === 'notification' || type === 'notification-mini') {
      return theme.colors.white;
    } else if (type === 'symbol') {
      return theme.colors.primary.default;
    } else {
      return theme.colors.dark_gray;
    }
  }, [type, theme]);

  return (
    <StyledCounter
      type={type}
      theme={theme}
      noMargin={noMargin}
      color={color}
      {...other}
    >
      {(type === 'attachment' || type === 'task-progress') && (
        <CounterIcon>
          <Icon
            name={
              type === 'attachment' ? IconNames.paperClip : IconNames.checkbox
            }
            size="small"
            color={color}
          />
        </CounterIcon>
      )}
      {count} {text && text}
    </StyledCounter>
  );
};

const Counter = withTheme(CustomCounter);

export { Counter };
export type { ICounterProps, IBasicCounterProps };
