import { styled } from '@linaria/react';
import type { ITheme } from 'theme';

interface IBaseProps {
  theme: ITheme;
}

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SuggestionsContainer = styled.ul<IBaseProps>`
  width: 100%;
  margin: 2px 0 0 0;
  list-style: none;
  padding: 0;
  max-height: 224px;
  border-radius: 4px 4px 8px 8px;
  box-shadow: 2px 2px 20px ${(props) => props.theme.shadow.default};
  position: absolute;
  left: 0;
  top: 55px;
  overflow: auto;
  z-index: 100;
  background: ${(props) => props.theme.colors.white};
`;

const Suggestion = styled.li<IBaseProps>`
  padding: 1rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 20px ${(props) => props.theme.shadow.default};
  }
`;

const DropdownStoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 3rem 18rem 3rem;
`;

export {
  DropdownContainer,
  SuggestionsContainer,
  Suggestion,
  DropdownStoryContainer,
};
export type { IBaseProps };
