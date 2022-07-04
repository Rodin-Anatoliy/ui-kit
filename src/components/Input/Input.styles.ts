import { styled } from '@linaria/react';
import type { ITheme } from 'theme';

interface IBaseProps {
  theme: ITheme;
}

const resetInputStyles = `
  border: none;
  outline: none;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background: transparent;
  margin: 0;
  padding: 0;
  line-height: 1.5rem;
`;

const StyledTextAreaInput = styled.textarea<IBaseProps>`
  ${resetInputStyles}

  height: 100%;
  resize: none;
  color: ${(props) =>
    props?.disabled ? props.theme.colors.gray : props.theme.text.primary};
`;

const StyledInput = styled.input<IBaseProps>`
  ${resetInputStyles}

  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &[type='number'] {
    appearance: none;
    -moz-appearance: textfield;
  }

  color: ${(props) =>
    props?.disabled ? props.theme.colors.gray : props.theme.text.primary};
`;

export { StyledTextAreaInput, StyledInput };
