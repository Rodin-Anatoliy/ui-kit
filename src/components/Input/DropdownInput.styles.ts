import { styled } from '@linaria/react';
import type { ITheme } from 'theme';

interface IBaseProps {
  theme: ITheme;
}

const DropdownContainer = styled.div`
  position: relative;
  flex: 1;
`;

const SuggestionsContainer = styled.ul<IBaseProps>`
  width: 100%;
  margin: 2px 0 0 0;
  list-style: none;
  padding: 0;
  max-height: 224px;
  border-radius: 4px 4px 8px 8px;
  box-shadow: 2px 2px 20px ${(props) => props.theme.shadow.default};
  color: ${(props) => props.theme.colors.dark_gray};
  position: absolute;
  left: 0;
  top: 59px;
  overflow: auto;
  z-index: 100;
  background: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.default}, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;

  /* Firefox */
  & {
    scrollbar-width: thin;
    scrollbar-color: ${(props) =>
      `${props.theme.colors.gray} ${props.theme.colors.white_smoke}`};
  }

  /*Chrome/Edge/Safari */
  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.white_smoke};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.gray};
    border-radius: 8px;
  }
`;

const Suggestion = styled.li<IBaseProps>`
  padding: 1rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 20px ${(props) => props.theme.shadow.default};
  }
`;

export { SuggestionsContainer, Suggestion, DropdownContainer };
