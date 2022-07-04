import { styled } from '@linaria/react';

import type { ITheme } from '../../theme';
import type { IOptionalCheckBoxProps } from './CheckBox';

interface IBaseProps {
  theme: ITheme;
}

interface IStyledControlProps extends IBaseProps {
  borderRadius?: string;
  disabled?: boolean;
  isFocused?: boolean;
  checked?: boolean;
}

interface IRootProps extends IBaseProps {
  disabled?: boolean;
}

const Root = styled.div<IRootProps>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props?.disabled ? 'default' : 'pointer')};
  color: ${(props) => props.theme.colors.dark_gray};
  opacity: ${(props) => (props?.disabled ? '0.3' : '1')};
  font-family: ${(props) => props.theme.fonts.default};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const InputContainer = styled.div<IStyledControlProps>`
  position: relative;
  display: block;
  box-sizing: border-box;
  border-radius: ${(props) =>
    props?.borderRadius ? props?.borderRadius : 'none'};

  box-shadow: ${(props) => {
    if (props?.disabled) {
      return `1px 1px 4px 0px ${props.theme.shadow.button.disabled}`;
    } else if (props?.isFocused) {
      return `0px 1px 2px 2px ${props.theme.shadow.button.focus}`;
    } else {
      return `2px 2px 4px 0px ${props.theme.shadow.button.default}, 0.5px 0.5px 0.5px 0px ${props.theme.shadow.button.inset}`;
    }
  }};

  &:hover {
    box-shadow: ${(props) => {
      if (!props?.disabled) {
        return props?.isFocused
          ? `0px 1px 2px 2px ${props.theme.shadow.button.focus}, 2px 2px 20px 0px ${props.theme.shadow.button.default}`
          : `2px 2px 20px 0px ${props.theme.shadow.button.default}`;
      } else {
        return `1px 1px 4px 0px ${props.theme.shadow.button.disabled}`;
      }
    }};
  }
  &:active {
    box-shadow: ${(props) =>
      !props?.disabled
        ? `2px 2px 4px 0px ${props.theme.shadow.button.default}`
        : `1px 1px 4px 0px ${props.theme.shadow.button.disabled}`};
  }
`;

const TextLeft = styled.span<IBaseProps>`
  margin-right: 10px;
`;

const TextRight = styled.span<IBaseProps>`
  margin-left: 10px;
`;

const ControlIconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  cursor: ${(props) => (props?.disabled ? 'default' : 'pointer')};
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;

type ICheckBoxProps = IStyledControlProps & IOptionalCheckBoxProps;

const StyledCheckBox = styled.div<ICheckBoxProps>`
  border: ${(props) => {
    if (props?.multiCheck) {
      return `2px solid  ${props.theme.colors.white}`;
    } else if (!props?.checked) {
      return `1px solid  ${props.theme.colors.gray}`;
    } else {
      return 'none';
    }
  }};
  background: ${(props) => {
    if (props?.checked) {
      if (!props?.multiCheck) {
        return props.theme.colors.primary.default;
      } else {
        switch (props?.checkType) {
          case 'single':
            return props.theme.colors.white;
          case 'partial':
            return 'none';
          default:
            return props.theme.colors.primary.default;
        }
      }
    } else {
      return 'none';
    }
  }};
  width: ${(props) => (props?.multiCheck ? '22px' : '24px')};
  height: ${(props) => (props?.multiCheck ? '22px' : '24px')};
  color: ${(props) => props.theme.colors.dark_gray};
  position: relative;
  border-radius: ${(props) =>
    props?.borderRadius ? props?.borderRadius : 'none'};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: ${(props) => (!props?.multiCheck ? 'none' : 'block')};
    border: 2px solid
      ${(props) =>
        props?.checked
          ? props.theme.colors.primary.default
          : props.theme.colors.dark_gray};
    width: 100%;
    height: 100%;
    border-radius: ${(props) =>
      props?.borderRadius ? props?.borderRadius : 'none'};
  }
`;

const StyledSwitch = styled.div<IStyledControlProps>`
  position: relative;
  padding: 2px;
  width: 40px;
  height: 20px;
  border-radius: ${(props) =>
    props?.borderRadius ? props?.borderRadius : 'none'};
  background: ${(props) =>
    props.checked
      ? props.theme.colors.primary.default
      : props.theme.colors.dark_gray_light};
  border: 2px solid ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.default};
`;

const SwitchThumb = styled.div<IStyledControlProps>`
  position: absolute;
  left: ${(props) => (props.checked ? '18px' : '2px')};
  width: 16px;
  height: 12px;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) =>
    props?.borderRadius ? props?.borderRadius : 'none'};
  transition: left 0.1s ease-out;
`;

const StyledRadio = styled.div<IStyledControlProps>`
  --border-width: 2px;
  border: ${(props) => (props?.checked ? '1px' : '2px')} solid;
  border-color: ${(props) => props.theme.colors.white};
  width: 22px;
  height: 22px;
  box-sizing: border-box;
  position: relative;
  border-radius: ${(props) =>
    props?.borderRadius ? props?.borderRadius : 'none'};
  background: ${(props) =>
    props.checked ? props.theme.colors.primary.default : 'none'};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: ${(props) => (props?.checked ? 'none' : 'block')};
    border: var(--border-width) solid ${(props) => props.theme.colors.dark_gray};
    width: 100%;
    height: 100%;
    border-radius: ${(props) =>
      props?.borderRadius ? props?.borderRadius : 'none'};
  }
  &:after {
    content: '';
    position: absolute;
    top: var(--border-width);
    left: var(--border-width);
    display: ${(props) => (props?.checked ? 'none' : 'block')};
    border: var(--border-width) solid ${(props) => props.theme.colors.white};
    width: calc(100% - var(--border-width) * 2);
    height: calc(100% - var(--border-width) * 2);
    border-radius: ${(props) =>
      props?.borderRadius ? props?.borderRadius : 'none'};
  }
`;

const CircleRadio = styled.div<IStyledControlProps>`
  display: ${(props) => (props.checked ? 'block' : 'none')};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary.default};
  position: absolute;
  top: calc(50% - 4px);
  left: calc(50% - 4px);
  box-sizing: border-box;
`;

export {
  Root,
  InputContainer,
  TextLeft,
  TextRight,
  ControlIconContainer,
  Input,
  StyledCheckBox,
  StyledSwitch,
  SwitchThumb,
  StyledRadio,
  CircleRadio,
};
export type { IBaseProps, IStyledControlProps };
