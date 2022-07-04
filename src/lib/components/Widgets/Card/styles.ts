import { styled } from '@linaria/react';

import type { ITheme } from '../../../theme';
import { withTheme } from '../../../theme';

export interface IWithTheme {
  theme: ITheme;
}

interface IRootProps extends IWithTheme {
  paddingSize?: 'small' | 'big';
  headerSize?: string;
}

interface IHeaderProps {
  headerSize?: string;
}

const CardRoot = styled.div<IRootProps>`
  display: flex;
  flex-direction: column;
  padding: ${(props) =>
    props.paddingSize === 'small' ? '0.75rem' : '1.75rem 2.5rem 2rem 2.5rem'};
  box-shadow: 4px 4px 24px ${(props) => props.theme.shadow.modal.container};
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.white};
  max-height: 98vh;
`;

export const CardHeader = styled.h2<IHeaderProps>`
  margin-bottom: 2rem;
  padding-right: 1.5rem;
  font-weight: bold;
  font-size: ${(props) => (props.headerSize ? props.headerSize : '1.75rem')};
  line-height: 2rem;
`;

export const CardContent = styled.div`
  padding-right: 1.5rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: bold;
`;

export const ThemedCardRoot = withTheme(CardRoot);
