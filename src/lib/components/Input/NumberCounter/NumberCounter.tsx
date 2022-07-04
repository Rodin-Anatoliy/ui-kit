import type { FC } from 'react';
import React from 'react';

import { Icon, IconNames } from '../../Icon';
import * as Styled from './styles';

export interface INumberCounterProps {
  prefix: string;
  value: number;
  background?: string;
  increment: () => void;
  decrement: () => void;
}

export const NumberCounter: FC<INumberCounterProps> = ({
  prefix,
  value,
  increment,
  decrement,
  background,
}) => (
  <>
    <Styled.NumberCounterContainer background={background}>
      <Styled.NumberCounterValue>
        {prefix} {value}
      </Styled.NumberCounterValue>
      <Styled.NumberCounterButtons>
        <Styled.NumberCounterButton onClick={increment} isRotate={true}>
          <Icon name={IconNames.triangleDown} size="small" color="#92929D" />
        </Styled.NumberCounterButton>
        <Styled.NumberCounterButton onClick={decrement}>
          <Icon name={IconNames.triangleDown} size="small" color="#92929D" />
        </Styled.NumberCounterButton>
      </Styled.NumberCounterButtons>
    </Styled.NumberCounterContainer>
  </>
);
