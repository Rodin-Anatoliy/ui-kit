import { styled } from '@linaria/react';
import type { ITheme } from 'theme';

interface IBaseProps {
  theme: ITheme;
}

interface IInputContainerProps extends IBaseProps {
  disabled?: boolean;
  error?: string;
  isFocused?: boolean;
}

const InputContainer = styled.div<IInputContainerProps>`
  flex: 1;
  position: relative;
  font-family: ${(props) => props.theme.fonts.default}, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;
  outline: none;
  border-radius: 0.5rem;
  transition: 0.1s ease-out;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  box-shadow: none;
  padding: calc(1rem - 1px);
  cursor: ${(props) => (props?.disabled ? 'default' : 'text')};
  border: 1px solid
    ${(props) => {
      if (props?.error) {
        return props.theme.error.default;
      } else if (props?.disabled) {
        return props.theme.colors.white_smoke;
      } else if (props?.isFocused) {
        return props.theme.text.primary;
      } else {
        return props.theme.colors.gray;
      }
    }};
  background: ${(props) =>
    props?.disabled
      ? props.theme.colors.white_smoke
      : props.theme.colors.white};
  color: ${(props) =>
    props?.disabled ? props.theme.colors.gray : props.theme.text.primary};

  &:hover {
    box-shadow: ${(props) =>
      props?.disabled ? 'none' : `2px 2px 20px ${props.theme.shadow.default}`};
  }

  &:active {
    box-shadow: ${(props) =>
      props?.disabled ? 'none' : `2px 2px 4px ${props.theme.shadow.default}`};
  }
`;

interface ILabelProps extends IBaseProps {
  error: string | undefined;
  disabled: boolean;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  isLabelUpped?: boolean;
}

const Label = styled.label<ILabelProps>`
  position: absolute;
  border-radius: 4px;
  left: 0;
  background-color: ${(props) =>
    props?.disabled
      ? props.theme.colors.white_smoke
      : props.theme.colors.white};
  color: ${(props) =>
    props?.disabled ? props.theme.colors.gray : props.theme.colors.dark_gray};
  margin: 0;
  padding: 2px 4px;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
  box-shadow: ${(props) => (props.disabled ? 'none' : 'inherit')};
  transform: translateY(-50%);
  top: ${(props) => (props?.isLabelUpped ? '0' : '50%')};
  margin-right: ${(props) => (props?.isRightIcon ? '3.5rem' : '1rem')};
  margin-left: ${(props) => {
    if (props?.isLabelUpped) {
      return '0.3rem';
    } else if (props?.isLeftIcon) {
      return '3.5rem';
    } else {
      return '1rem';
    }
  }};
`;

interface IPlaceholderProps extends IBaseProps {
  disabled: boolean;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
}

const Content = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex: 1;
`;

const Placeholder = styled.label<IPlaceholderProps>`
  position: absolute;
  left: 0;
  border: none;
  background-color: transparent;
  color: ${(props) =>
    props?.disabled ? props.theme.colors.gray : props.theme.colors.dark_gray};
  margin: 0;
  padding: 0;
  pointer-events: none;
`;

const Required = styled.span<IBaseProps>`
  color: ${(props) => props.theme.error.default};
`;

const ErrorLabel = styled.label<IBaseProps>`
  position: absolute;
  font-size: 0.75rem;
  border-radius: 4px;
  left: 0;
  bottom: 0;
  transform: translateY(50%);
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.error.default};
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
`;

const CounterContainer = styled.span<IBaseProps>`
  color: ${(props) => props.theme.colors.primary.default};
`;

export {
  InputContainer,
  Label,
  Required,
  ErrorLabel,
  CounterContainer,
  Placeholder,
  Content,
};
export type { IBaseProps, IInputContainerProps, ILabelProps };
