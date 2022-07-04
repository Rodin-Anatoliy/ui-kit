import { styled } from '@linaria/react';

export const NumberCounterContainer = styled.div<{ background: string }>`
  border: 1px solid #e2e2ea;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1px 8px 1px 16px;
  display: flex;
  gap: 8px;
  user-select: none;
  height: 24px;
  background: ${(props) => (props.background ? props.background : 'white')};
`;

export const NumberCounterValue = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #0a0a0a;
  align-items: center;
  display: flex;
`;

export const NumberCounterButtons = styled.div`
  border-left: 1px solid #e2e2ea;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 4px;
`;

export const NumberCounterButton = styled.div<{ isRotate?: boolean }>`
  display: flex;
  justify-content: center;
  height: 10px;
  cursor: pointer;
  align-items: center;
  transform: ${(props) => (props.isRotate ? 'rotate(180deg)' : 'none')};
`;
