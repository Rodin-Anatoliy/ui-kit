import type { TIconName } from 'components/Icon/Icon';
import { Icon } from 'components/Icon/Icon';
import type { ButtonHTMLAttributes, Ref } from 'react';
import React, { useMemo } from 'react';
import type { ITheme } from 'theme';
import { withTheme } from 'theme';

import { StyledButton } from './Button.styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  startIcon?: TIconName;
  endIcon?: TIconName;
  btnType?: 'filled' | 'half-opacity' | 'no-fill' | 'outlined';
  colorType?:
    | 'primary'
    | 'negative'
    | 'positive'
    | 'accent'
    | 'white'
    | 'black';
  size?: 'large' | 'medium' | 'small';
  theme: ITheme;
}

const CustomButton: React.FC<IButtonProps> = React.forwardRef(
  (
    {
      onClick,
      btnType = 'filled',
      size = 'large',
      colorType = 'primary',
      disabled,
      startIcon,
      endIcon,
      children,
      className,
      theme,
      ...other
    },
    ref: Ref<HTMLButtonElement>,
  ) => {
    const color = useMemo(() => {
      if (btnType === 'filled' || !btnType) {
        return (colorType === 'positive' || colorType === 'white' ? theme.text.primary : theme.text.secondary);
      } else if (btnType === 'half-opacity' || btnType === 'outlined') {
        switch (colorType) {
          case 'negative':
            return theme.colors.secondary.negative.default;
          case 'positive':
            return theme.text.primary;
          case 'accent':
            return theme.colors.secondary.accent.default;
          case 'white':
            return btnType === 'outlined'
              ? theme.colors.white
              : theme.text.primary;
          case 'black':
            return btnType === 'outlined'
              ? theme.colors.black
              : theme.text.secondary;
          default:
            return theme.colors.primary.default;
        }
      } else {
        return theme.text.primary;
      }
    },[theme, btnType, colorType, ]);

    return (
      <StyledButton
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        btnType={btnType}
        size={size}
        isIconOnly={!children}
        className={className}
        theme={theme}
        colorType={colorType}
        style={{color: color}}
        {...other}
      >
        {startIcon && (
          <Icon
            name={startIcon}
            size={size}
            color={color}
            style={{ marginRight: children ? '12px' : '0' }}
          />
        )}

        {children}

        {endIcon && (
          <Icon
            name={endIcon}
            size={size}
            color={color}
            style={{ marginLeft: children ? '12px' : '0' }}
          />
        )}
      </StyledButton>
    );
  },
);

CustomButton.displayName = 'Button';

const Button = withTheme(CustomButton);

export { Button };
export type { IButtonProps };
