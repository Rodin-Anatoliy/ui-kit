import { styled } from '@linaria/react';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
`;

export const ModalCloseContainer = styled.div`
  position: absolute;
  top: 1.75em;
  right: 2.5em;
`;
