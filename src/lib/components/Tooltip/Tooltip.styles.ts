import { styled } from '@linaria/react';

import type { ITheme } from '../../theme';

export type TooltipPosition =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'top-left'
  | 'top-right';

export interface ITooltip {
  theme: ITheme;
  position: TooltipPosition;
}

export const StyledTooltipContainer = styled.div`
  position: relative;
  margin: 0;
  cursor: pointer;
`;

export const StyledTooltipItem = styled.div<ITooltip>`
  max-width: 200px;
  position: absolute;
  top: ${(props) => (props.position === 'bottom' ? '100%' : '')};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0.02em;
  bottom: ${(props) => {
    switch (props?.position) {
      case 'top':
        return '100%';
      case 'top-left':
        return '100%';
      case 'top-right':
        return '100%';
      case 'left':
        return '50%';
      case 'right':
        return '50%';
      default:
        return '';
    }
  }};
  right: ${(props) => {
    switch (props?.position) {
      case 'top':
        return '50%';
      case 'bottom':
        return '50%';
      case 'top-left':
        return '50%';
      case 'left':
        return '50%';
      default:
        return '0';
    }
  }};
  transform: translate(
    ${(props) => {
      switch (props?.position) {
        case 'bottom':
          return '50%';
        case 'top':
          return '50%';
        case 'left':
          return 'calc(-50% - 12px)';
        case 'right':
          return 'calc(100% + 12px)';
        default:
          return '0';
      }
    }},
    ${(props) => {
      switch (props?.position) {
        case 'bottom':
          return '10px';
        case 'top':
          return '-10px';
        case 'top-left':
          return '-10px';
        case 'top-right':
          return '-10px';
        case 'left':
          return '50%';
        case 'right':
          return '50%';
      }
    }}
  );
  padding: 4px 8px;
  background-color: ${(props) => props.theme.hint.default};
  border-radius: 8px;
  color: ${(props) => props.theme.text.secondary};

  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-left: ${(props) => {
      switch (props?.position) {
        case 'bottom':
          return '7px solid transparent';
        case 'top':
          return '7px solid transparent';
        case 'left':
          return `9px solid ${props.theme.hint.default}`;
        case 'right':
          return '0';
        case 'top-left':
          return '0';
        case 'top-right':
          return `9px solid ${props.theme.hint.default}`;
      }
    }};
    border-right: ${(props) => {
      switch (props?.position) {
        case 'bottom':
          return '7px solid transparent';
        case 'top':
          return '7px solid transparent';
        case 'left':
          return '0';
        case 'right':
          return `9px solid ${props.theme.hint.default}`;
        case 'top-left':
          return `9px solid ${props.theme.hint.default}`;
        case 'top-right':
          return '0';
      }
    }};
    border-bottom: ${(props) => {
      switch (props?.position) {
        case 'bottom':
          return `9px solid ${props.theme.hint.default}`;
        case 'top':
          return '0';
        case 'left':
          return '7px solid transparent';
        case 'right':
          return '7px solid transparent';
        case 'top-left':
          return '7px solid transparent';
        case 'top-right':
          return '7px solid transparent';
      }
    }};
    border-top: ${(props) => {
      switch (props?.position) {
        case 'bottom':
          return '0';
        case 'top':
          return `9px solid ${props.theme.hint.default}`;
        case 'left':
          return '7px solid transparent';
        case 'right':
          return '7px solid transparent';
        case 'top-left':
          return '7px solid transparent';
        case 'top-right':
          return '7px solid transparent';
      }
    }};
    top: ${(props) => (props.position === 'bottom' ? '-8px' : '')};
    bottom: ${(props) => {
      switch (props.position) {
        case 'top-left':
          return '-6px';
        case 'top-right':
          return '-6px';
        case 'top':
          return '-8px';
        default:
          return '';
      }
    }};
    left: ${(props) => {
      switch (props.position) {
        case 'bottom':
          return '50%';
        case 'top':
          return '50%';
        case 'right':
          return '0';
        case 'top-left':
          return '95%';
        case 'top-right':
          return '0';
        default:
          return '';
      }
    }};
    right: ${(props) => (props.position === 'left' ? '0' : '')};
    margin-left: ${(props) =>
      props.position === 'bottom' ||
      props.position === 'top' ||
      props.position === 'right' ||
      props.position === 'top-left'
        ? '-7px'
        : ''};
    margin-right: ${(props) => (props.position === 'left' ? '-7px' : '')};
    transform: ${(props) =>
      props.position === 'left' || props.position === 'right'
        ? 'translate(0, 10%)'
        : ''};
  }
`;
