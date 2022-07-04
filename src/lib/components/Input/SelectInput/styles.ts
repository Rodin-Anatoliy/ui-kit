import { styled } from '@linaria/react';

export const SelectInputContainer = styled.div<{ isShown: boolean }>`
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  box-shadow: rgba(0, 0, 0, 0.08) 0.125rem 0.125rem 0.25rem,
    rgba(0, 0, 0, 0.05) 0.031rem 0.031rem 0.031rem inset;
  border-radius: ${(props) => (props.isShown ? '0.5rem 0.5rem 0 0' : '0.5rem')};
  border: medium none;
  width: 100%;
  height: 1.5rem;
  display: flex;
  text-align: center;
  padding: 0.125rem;
  cursor: pointer;
  position: relative;
`;

export const SelectInputValue = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  text-align: center;
  padding-right: 0.5rem;
  flex-grow: 1;
  justify-content: flex-end;
  white-space: nowrap;
  padding-left: 0.75rem;
`;

export const SelectInputDelimiter = styled.div`
  background: rgb(245, 245, 245) none repeat scroll 0% 0%;
  width: 0.063rem;
  height: 100%;
`;

export const SelectInputIcon = styled.div`
  width: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectInputOptionContainer = styled.div`
  position: absolute;
  left: 0rem;
  top: calc(100% + 0.063rem);
  z-index: 1000;
  max-height: 6.25rem;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
`;

export const SelectInputOption = styled.div`
  width: 100%;
  text-align: left;
  border-bottom: 0.063rem solid rgb(223, 223, 223);
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  & :hover {
    background: #ccc;
  }
`;
