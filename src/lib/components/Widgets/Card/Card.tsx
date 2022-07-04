import type { FC } from 'react';
import React from 'react';

import * as Styled from './styles';

export interface ICardProps {
  header?: string;
  paddingSize?: 'small' | 'big';
  headerSize?: string;
}

export const Card: FC<ICardProps> = ({
  header,
  paddingSize,
  headerSize,
  children,
}) => (
  <Styled.ThemedCardRoot paddingSize={paddingSize} className="scroll">
    {header && (
      <Styled.CardHeader headerSize={headerSize}>{header}</Styled.CardHeader>
    )}
    <Styled.CardContent>{children}</Styled.CardContent>
  </Styled.ThemedCardRoot>
);
