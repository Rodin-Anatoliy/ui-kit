import type { FC } from 'react';
import React from 'react';

import { Button } from '../../Button';
import { IconNames } from '../../Icon';
import { Card } from '../Card';
import { ModalCloseContainer, ModalContainer } from './Modal.styles';

export interface IModalProps {
  header?: string;
  isClosable?: boolean;
  onCloseClick?: () => void;
}

export const Modal: FC<IModalProps> = ({
  header,
  isClosable,
  onCloseClick,
  children,
}) => (
  <ModalContainer>
    <Card header={header}>
      {isClosable && (
        <ModalCloseContainer>
          <Button
            onClick={onCloseClick}
            colorType="white"
            size="small"
            startIcon={IconNames.cross}
          />
        </ModalCloseContainer>
      )}
      {children}
    </Card>
  </ModalContainer>
);
