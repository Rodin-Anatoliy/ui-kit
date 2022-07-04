import { styled } from '@linaria/react';

import type { ITheme } from '../../theme';

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
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.02rem;
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

const DropdownContainer = styled.div`
  position: relative;
  flex: 1;
`;

const SuggestionsContainer = styled.ul<IBaseProps>`
  width: 100%;
  margin: 0.125rem 0 0 0;
  list-style: none;
  padding: 0;
  max-height: 224px;
  border-radius: 0.25rem 0.25rem 0.75rem 0.75rem;
  box-shadow: 2px 2px 20px ${(props) => props.theme.shadow.default};
  color: ${(props) => props.theme.colors.dark_gray};
  position: absolute;
  left: 0;
  top: calc(100% + 4px);
  overflow: auto;
  z-index: 100;
  background: ${(props) => props.theme.colors.white};
`;

interface ISuggestion extends IBaseProps {
  isSelected?: boolean;
}

const Suggestion = styled.li<ISuggestion>`
  padding: 1rem;
  width: 100%;
  cursor: pointer;

  box-shadow: ${(props) =>
    props?.isSelected ? `2px 2px 20px ${props.theme.shadow.default}` : 'none'};
`;

const DropdownContentContainer = styled.div`
  position: relative;
  flex: 1;
`;

const DropdownContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

export {
  StyledTextAreaInput,
  StyledInput,
  SuggestionsContainer,
  Suggestion,
  DropdownContainer,
  DropdownContent,
  DropdownContentContainer,
};
