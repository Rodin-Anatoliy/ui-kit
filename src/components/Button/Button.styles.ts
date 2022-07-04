import { styled } from '@linaria/react';
import type { ITheme } from 'theme';

interface IStyledButtonProps {
  btnType?: 'filled' | 'half-opacity' | 'no-fill' | 'outlined';
  colorType?:
    | 'primary'
    | 'negative'
    | 'positive'
    | 'accent'
    | 'white'
    | 'black';
  size: 'large' | 'medium' | 'small';
  isIconOnly?: boolean;
  disabled: boolean;
  theme: ITheme;
}

const StyledButton = styled.button<IStyledButtonProps>`
  border: none;
  outline: none;
  font-weight: 500;
  font-size: ${(props) => (props.size === 'small' ? '12px' : '16px')};
  line-height: ${(props) => (props.size === 'small' ? '16px' : '24px')};
  width: auto;
  height: auto;
  font-family: ${(props) => props.theme.fonts.default}, sans-serif;
  background-color: ${(props) => {
    if (props?.btnType === 'filled' || !props?.btnType) {
      switch (props?.colorType) {
        case 'primary':
          return props.theme.colors.primary.default;
        case 'negative':
          return props.theme.colors.secondary.negative.default;
        case 'positive':
          return props.theme.colors.secondary.positive.default;
        case 'accent':
          return props.theme.colors.secondary.accent.default;
        case 'white':
          return props.theme.colors.white;
        case 'black':
          return props.theme.colors.black;
        default:
          return props.theme.colors.primary.default;
      }
    } else if (props?.btnType === 'half-opacity') {
      switch (props?.colorType) {
        case 'primary':
          return props.theme.colors.primary.half_opacity;
        case 'negative':
          return props.theme.colors.secondary.negative.half_opacity;
        case 'positive':
          return props.theme.colors.secondary.positive.half_opacity;
        case 'accent':
          return props.theme.colors.secondary.accent.half_opacity;
        case 'white':
          return 'rgba(255, 255, 255, 0.5)';
        case 'black':
          return 'rgba(0, 0, 0, 0.5)';
        default:
          return props.theme.colors.primary.half_opacity;
      }
    } else if (props?.btnType === 'no-fill' || props?.btnType === 'outlined') {
      return 'transparent';
    }
  }};
  padding: ${(props) => {
    if (props?.isIconOnly) {
      switch (props.size) {
        case 'large':
          return props?.btnType === 'outlined' ? '14px' : '16px';
        case 'medium':
          return props?.btnType === 'outlined' ? '8px' : '10px';
        case 'small':
          return props?.btnType === 'outlined' ? '2px' : '4px';
        default:
          return props?.btnType === 'outlined' ? '14px' : '16px';
      }
    } else {
      switch (props.size) {
        case 'large':
          return props?.btnType === 'outlined' ? '14px 18px' : '16px 20px';
        case 'medium':
          return props?.btnType === 'outlined' ? '8px 11px' : '10px 13px';
        case 'small':
          return props?.btnType === 'outlined' ? '2px 5px' : '4px 7px';
        default:
          return props?.btnType === 'outlined' ? '14px 18px' : '16px 20px';
      }
    }
  }};
  border: ${(props) => {
    if (props?.btnType === 'outlined') {
      switch (props?.colorType) {
        case 'primary':
          return `2px solid ${props.theme.colors.primary.default}`;
        case 'negative':
          return `2px solid ${props.theme.colors.secondary.negative.default}`;
        case 'positive':
          return `2px solid ${props.theme.colors.secondary.positive.default}`;
        case 'accent':
          return `2px solid ${props.theme.colors.secondary.accent.default}`;
        case 'white':
          return `2px solid ${props.theme.colors.white}`;
        case 'black':
          return `2px solid ${props.theme.colors.black}`;
        default:
          return `2px solid ${props.theme.colors.primary.default}`;
      }
    } else {
      return 'none';
    }
  }};
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 0.5rem;
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
