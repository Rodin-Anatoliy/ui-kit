import { styled } from '@linaria/react';
import type { ITheme } from 'theme';

interface IBaseProps {
  theme: ITheme;
}

const ErrorHintContainer = styled.div`
  position: relative;
  margin: auto;
  margin-left: 20px;
  padding: 0;
`;

const Hint = styled.div<IBaseProps>`
  position: absolute;
  bottom: 100%;
  background-color: ${(props) => props.theme.hint.default};
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  font-family: ${(props) => props.theme.hint.default}, sans-serif;
  font-weight: 400;
  font-size: 14px;
  max-width: 130px;
  color: ${(props) => props.theme.text.secondary};
  z-index: 2;
`;

export { ErrorHintContainer, Hint };
