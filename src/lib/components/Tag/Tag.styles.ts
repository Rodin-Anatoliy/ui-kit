import { styled } from '@linaria/react';

import type { ITheme } from '../../theme';
import type { IBasicCounterProps } from './Counter';
import type { IBasicProgressBarProps } from './ProgressBar';
import type { IBasicTagProps } from './Tag';
interface IStyledTagProps extends IBasicTagProps {
  color: string;
}

const StyledTag = styled.div<IStyledTagProps>`
  --border-width: ${(props) =>
    props?.type === 'outlined' || props?.borderColor ? '2px' : '0px'};

  display: inline-block;
  font-family: ${(props) => props.theme.fonts.default}, sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.02rem;
  position: relative;
  margin: ${(props) => (props.noMargin ? '0' : '0.5rem 0.75rem')};
  padding: ${(props) =>
    props?.isFilter ? '0.25rem 0.75rem' : '0.25rem 0.5rem'};
  border-radius: ${(props) => (props?.isFilter ? '0.5rem' : '0.25rem')};
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.color};

  background-color: ${(props) => {
    if (props?.backgroundColor) {
      return props?.backgroundColor;
    } else if (props?.type === 'no-fill' || props?.type === 'outlined') {
      return 'transparent';
    } else if (props?.type === 'colored-content') {
      return props.theme.colors.white;
    } else {
      switch (props?.colorType) {
        case 'primary':
          return props?.type === 'half-opacity'
            ? props.theme.colors.primary.half_opacity
            : props.theme.colors.primary.default;
        case 'negative':
          return props?.type === 'half-opacity'
            ? props.theme.colors.secondary.negative.half_opacity
            : props.theme.colors.secondary.negative.default;
        case 'positive':
          return props?.type === 'half-opacity'
            ? props.theme.colors.secondary.positive.half_opacity
            : props.theme.colors.secondary.positive.default;
        case 'accent':
          return props?.type === 'half-opacity'
            ? props.theme.colors.secondary.accent.half_opacity
            : props.theme.colors.secondary.accent.default;
        case 'in-progress':
          return props?.type === 'half-opacity'
            ? props.theme.colors.secondary.inProgress.half_opacity
            : props.theme.colors.secondary.inProgress.default;
        case 'white':
          return props?.type === 'half-opacity'
            ? 'rgba(255, 255, 255, 0.2)'
            : props.theme.colors.white;
        case 'black':
          return props?.type === 'half-opacity'
            ? 'rgba(0, 0, 0, 0.2)'
            : props.theme.colors.black;
        default:
          return props?.type === 'half-opacity'
            ? 'rgba(123, 123, 123, 0.2)'
            : props.theme.colors.dark_gray;
      }
    }
  }};

  border-width: var(--border-width);
  border-style: solid;
  border-color: ${(props) =>
    props?.borderColor ? props?.borderColor : props?.color};
`;

const TagContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface IStyledCounter extends IBasicCounterProps {
  color: string;
}

const StyledCounter = styled.div<IStyledCounter>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.default}, sans-serif;
  font-weight: ${(props) => (props?.type === 'notification' ? '600' : '400')};
  font-size: ${(props) => {
    if (props?.type === 'attachment' || props?.type === 'task-progress') {
      return '1rem';
    } else if (props?.type === 'notification') {
      return '0.875rem';
    } else {
      return '0.75rem';
    }
  }};
  line-height: ${(props) =>
    props?.type === 'attachment' || props?.type === 'task-progress'
      ? '1.5rem'
      : '1rem'};
  position: relative;
  margin: ${(props) => (props.noMargin ? '0' : '0.5rem 0.75rem')};
  padding: ${(props) =>
    props?.type === 'notification' ||
    props?.type === 'attachment' ||
    props?.type === 'task-progress'
      ? '0.25rem 0.5rem'
      : '0.125rem 0.375rem'};
  border-radius: ${(props) =>
    props?.type === 'notification' || props?.type === 'notification-mini'
      ? '0.75rem'
      : '0.1875rem'};
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.color};

  background-color: ${(props) => {
    if (props?.type === 'notification' || props?.type === 'notification-mini') {
      return props.theme.colors.secondary.negative.default;
    } else if (props?.type === 'symbol') {
      return props.theme.colors.white;
    } else {
      return 'transparent';
    }
  }};
`;

const CounterIcon = styled.div`
  margin-right: 0.3125rem;
`;

interface IStyledBarProps extends IBasicProgressBarProps {
  barColor?: string;
}

const StyledBar = styled.div<IStyledBarProps>`
  position: relative;
  height: 1.5rem;
  overflow: hidden;
  padding: 0.25rem;
  border-radius: ${(props) => props?.borderRadius};
  background: ${(props) =>
    props?.barColor ? props?.barColor : props.theme.colors.white_smoke};
`;

interface IStyledProgressProps extends IBasicProgressBarProps {
  progressColor?: string;
  width?: number;
}

const StyledProgress = styled.div<IStyledProgressProps>`
  border-radius: ${(props) => props?.borderRadius};
  background: ${(props) => {
    if (props?.progressColor) {
      return props?.progressColor;
    } else {
      switch (props?.colorType) {
        case 'primary':
          return props.theme.colors.primary.default;
        case 'negative':
          return props.theme.colors.secondary.negative.default;
        case 'positive':
          return props.theme.colors.secondary.positive.default;
        case 'accent':
          return props.theme.colors.secondary.accent.default;
        case 'in-progress':
          return props.theme.colors.secondary.inProgress.default;
        case 'white':
          return props.theme.colors.white;
        case 'black':
          return props.theme.colors.black;
        default:
          return props.theme.colors.dark_gray;
      }
    }
  }};
  height: 100%;
  width: ${(props) => (props?.width ? props?.width : 0)}%;
  transition: 0.3s ease;
`;

interface IProgressBarText {
  color?: string;
  theme: ITheme;
}

const ProgressBarText = styled.p<IProgressBarText>`
  position: absolute;
  right: 0.75rem;
  top: 0.25rem;
  color: ${(props) =>
    props?.color ? props?.color : props.theme.colors.dark_gray};
  font-family: ${(props) => props.theme.fonts.default}, sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.02rem;
`;

export {
  StyledTag,
  TagContent,
  StyledCounter,
  StyledBar,
  StyledProgress,
  CounterIcon,
  ProgressBarText,
};
export type {
  IStyledTagProps,
  IStyledBarProps,
  IStyledProgressProps,
  IStyledCounter,
  IProgressBarText,
};
