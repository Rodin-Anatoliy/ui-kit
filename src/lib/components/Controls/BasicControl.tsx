import type { InputHTMLAttributes } from 'react';
import React from 'react';

import type { ITheme } from '../../theme';
import { withTheme } from '../../theme';

interface IBasicControlProps {
  isFocused?: boolean;
  label?: string | React.ReactNode;
  textLocation?: 'left' | 'right';
  theme: ITheme;
  disabled?: boolean;
}

interface IOptionBasicControlProps {
  borderRadius?: string;
}

import { InputContainer, Root, TextLeft, TextRight } from './Control.styles';

const BasicControl: React.FC<
  IBasicControlProps &
    IOptionBasicControlProps &
    InputHTMLAttributes<HTMLInputElement>
> = ({
  disabled,
  label,
  textLocation,
  theme,
  isFocused,
  onClick,
  borderRadius,
  children,
}) => (
  <Root disabled={disabled} theme={theme} onClick={onClick}>
    {textLocation === 'left' && <TextLeft theme={theme}>{label}</TextLeft>}
    <InputContainer
      borderRadius={borderRadius}
      isFocused={isFocused}
      disabled={disabled}
      theme={theme}
    >
      {children}
    </InputContainer>

    {textLocation === 'right' && <TextRight theme={theme}>{label}</TextRight>}
  </Root>
);

BasicControl.displayName = 'BasicControl';

const BasicControlWithTheme = withTheme(BasicControl);

export { BasicControlWithTheme as BasicControl };
export type { IBasicControlProps };
