import { styled } from '@linaria/react';

import type { IButtonBaseProps } from './Button';

interface IStyledButtonProps extends IButtonBaseProps {
  isIconOnly?: boolean;
  disabled: boolean;
  color: string;
  isBold?: boolean;
}

const StyledButton = styled.button<IStyledButtonProps>`
  border: none;
  outline: none;
  font-weight: ${(props) => (props.isBold ? '700' : '500')};
  font-size: ${(props) => (props.size === 'small' ? '0.75rem' : '1rem')};
  line-height: ${(props) => (props.size === 'small' ? '1rem' : '1.25rem')};
  width: auto;
  height: auto;
  font-size: ${(props) => (props.size === 'small' ? '0.75rem' : '1rem')};
  font-style: normal;
  font-weight: ${(props) => (props.size === 'small' ? '700' : '500')};
  line-height: ${(props) => (props.size === 'small' ? '1rem' : '1.5rem')};
  letter-spacing: ${(props) =>
    props.size === 'small' ? '0.02rem' : '0.04rem'};

  padding: ${(props) => {
    if (props?.isIconOnly) {
      switch (props.size) {
        case 'large':
          return props?.btnType === 'outlined' ? '0.875rem' : '1rem';
        case 'medium':
          return props?.btnType === 'outlined' ? '0.5rem' : '0.625rem';
        case 'small':
          return props?.btnType === 'outlined' ? '0.125rem' : '0.25rem';
        default:
          return props?.btnType === 'outlined' ? '0.875rem' : '1rem';
      }
    } else {
      switch (props.size) {
        case 'large':
          return props?.btnType === 'outlined'
            ? '0.875rem 1.125rem'
            : '1rem 1.25rem';
        case 'medium':
          return props?.btnType === 'outlined'
            ? '0.5rem 0.6875rem'
            : '0.625rem 0.8125rem';
        case 'small':
          return props?.btnType === 'outlined'
            ? '0.125rem 0.3125rem'
            : '0.25rem 0.4375rem';
        default:
          return props?.btnType === 'outlined'
            ? '0.875rem 1.125rem'
            : '1rem 1.25rem';
      }
    }
  }};

  color: ${(props) => props.color};
  background-color: ${(props) => {
    if (props?.backgroundColor) {
      return props?.backgroundColor;
    } else if (props?.btnType === 'no-fill' || props?.btnType === 'outlined') {
      return 'transparent';
    } else if (props?.btnType === 'colored-content') {
      return props.theme.colors.white;
    } else {
      switch (props?.colorType) {
        case 'primary':
          return props?.btnType === 'half-opacity'
            ? props.theme.colors.primary.half_opacity
            : props.theme.colors.primary.default;
        case 'negative':
          return props?.btnType === 'half-opacity'
            ? props.theme.colors.secondary.negative.half_opacity
            : props.theme.colors.secondary.negative.default;
        case 'positive':
          return props?.btnType === 'half-opacity'
            ? props.theme.colors.secondary.positive.half_opacity
            : props.theme.colors.secondary.positive.default;
        case 'accent':
          return props?.btnType === 'half-opacity'
            ? props.theme.colors.secondary.accent.half_opacity
            : props.theme.colors.secondary.accent.default;
        case 'in-progress':
          return props?.btnType === 'half-opacity'
            ? props.theme.colors.secondary.inProgress.half_opacity
            : props.theme.colors.secondary.inProgress.default;
        case 'white':
          return props?.btnType === 'half-opacity'
            ? 'rgba(255, 255, 255, 0.2)'
            : props.theme.colors.white;
        case 'black':
          return props?.btnType === 'half-opacity'
            ? 'rgba(0, 0, 0, 0.2)'
            : props.theme.colors.black;
        default:
          return props?.btnType === 'half-opacity'
            ? 'rgba(123, 123, 123, 0.2)'
            : props.theme.colors.dark_gray;
      }
    }
  }};
  border: ${(props) =>
    props?.btnType === 'outlined' || props?.borderColor ? '2px solid' : 'none'};
  border-color: ${(props) =>
    props?.borderColor ? props?.borderColor : props?.color};

  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: ${(props) =>
    props?.isCircle && props?.isIconOnly ? '50%' : '0.5rem'};
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  opacity: 1;

  box-shadow: ${(props) =>
    props?.btnType !== 'no-fill'
      ? `2px 2px 4px 0px ${props.theme.shadow.button.default}, 0.5px 0.5px 0.5px 0px ${props.theme.shadow.button.inset}`
      : 'none'};
  &:hover {
    box-shadow: ${(props) =>
      props?.btnType !== 'no-fill'
        ? `2px 2px 20px 0px ${props.theme.shadow.button.default}`
        : 'none'};
  }
  &:disabled {
    box-shadow: ${(props) =>
      props?.btnType !== 'no-fill'
        ? `1px 1px 4px 0px ${props.theme.shadow.button.disabled}`
        : 'none'};
    opacity: 0.5;
  }
  &:focus {
    box-shadow: ${(props) =>
      props?.btnType !== 'no-fill'
        ? `0px 1px 2px 2px ${props.theme.shadow.button.focus}, 2px 2px 20px 0px ${props.theme.shadow.button.default}`
        : 'none'};
  }
  &:active {
    box-shadow: ${(props) =>
      props?.btnType !== 'no-fill'
        ? `2px 2px 4px 0px ${props.theme.shadow.button.default}`
        : 'none'};
  }
`;

export { StyledButton };
export type { IStyledButtonProps };
