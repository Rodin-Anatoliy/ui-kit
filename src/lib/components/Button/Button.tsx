import type { ButtonHTMLAttributes, Ref } from 'react';
import React, { useMemo } from 'react';

import type { ITheme } from '../../theme';
import { withTheme } from '../../theme';
import type { IconNames } from '../Icon/Icon';
import { Icon } from '../Icon/Icon';
import { StyledButton } from './Button.styles';

type TButton =
  | 'filled'
  | 'half-opacity'
  | 'no-fill'
  | 'outlined'
  | 'colored-content';
type TSize = 'large' | 'medium' | 'small';
type TColor =
  | 'primary'
  | 'negative'
  | 'positive'
  | 'accent'
  | 'in-progress'
  | 'white'
  | 'black';

interface IButtonBaseProps {
  btnType?: TButton;
  colorType?: TColor;
  size?: TSize;
  isCircle?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  contentColor?: string;
  theme: ITheme;
  isBold?: boolean;
}

interface IButtonProps
  extends IButtonBaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  startIcon?: IconNames;
  endIcon?: IconNames;
}

const CustomButton: React.FC<IButtonProps> = React.forwardRef(
  (
    {
      onClick,
      btnType = 'filled',
      size = 'large',
      colorType,
      disabled,
      startIcon,
      endIcon,
      children,
      isCircle,
      borderColor,
      backgroundColor,
      contentColor,
      theme,
      isBold,
      ...other
    },
    ref: Ref<HTMLButtonElement>,
  ) => {
    const color = useMemo(() => {
      if (contentColor) {
        return contentColor;
      } else if (btnType === 'filled' || !btnType) {
        return colorType === 'white'
          ? theme.text.unActive
          : theme.text.secondary;
      } else {
        switch (colorType) {
          case 'primary':
            return theme.colors.primary.default;
          case 'negative':
            return theme.colors.secondary.negative.default;
          case 'positive':
            return theme.colors.secondary.positive.default;
          case 'accent':
            return theme.colors.secondary.accent.default;
          case 'in-progress':
            return theme.colors.secondary.inProgress.default;
          case 'white':
            return btnType === 'outlined' ||
              btnType === 'no-fill' ||
              btnType === 'half-opacity'
              ? theme.colors.white
              : theme.text.unActive;
          case 'black':
            return theme.colors.black;
          default:
            return theme.colors.dark_gray;
        }
      }
    }, [theme, btnType, colorType, contentColor]);

    return (
      <StyledButton
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        btnType={btnType}
        size={size}
        isIconOnly={!children}
        theme={theme}
        colorType={colorType}
        isCircle={isCircle}
        color={color}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        contentColor={contentColor}
        isBold={isBold}
        {...other}
      >
        {startIcon && (
          <Icon
            name={startIcon}
            size={size}
            color={color}
            style={{ marginRight: children ? '0.75rem' : '0' }}
          />
        )}

        {children}

        {endIcon && (
          <Icon
            name={endIcon}
            size={size}
            color={color}
            style={{ marginLeft: children ? '0.75rem' : '0' }}
          />
        )}
      </StyledButton>
    );
  },
);

CustomButton.displayName = 'Button';

const Button = withTheme(CustomButton);

export { Button };
export type { IButtonProps, IButtonBaseProps };
