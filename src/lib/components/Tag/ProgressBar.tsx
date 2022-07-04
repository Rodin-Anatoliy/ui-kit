import React, { useMemo } from 'react';

import type { ITheme } from '../../theme';
import { withTheme } from '../../theme';
import { ProgressBarText, StyledBar, StyledProgress } from './Tag.styles';

interface IBasicProgressBarProps {
  colorType?:
    | 'primary'
    | 'negative'
    | 'positive'
    | 'accent'
    | 'in-progress'
    | 'white'
    | 'black';
  borderRadius?: string;
  theme: ITheme;
}

interface IProgressBarProps extends IBasicProgressBarProps {
  value: number;
  total: number;
  barColor?: string;
  contentColor?: string;
  progressColor?: string;
}

const CustomProgressBar: React.FC<
  IProgressBarProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  value,
  total,
  progressColor,
  barColor,
  contentColor,
  borderRadius,
  colorType,
  theme,
  ...other
}) => {
  const progress = useMemo(
    () => Math.round(value >= total ? 100 : (value / total) * 100),
    [value, total],
  );

  const progressBarBorderRadius = useMemo(
    () => (borderRadius ? borderRadius : '0.75rem'),
    [borderRadius],
  );

  return (
    <StyledBar
      barColor={barColor}
      borderRadius={progressBarBorderRadius}
      colorType={colorType}
      theme={theme}
      {...other}
    >
      <StyledProgress
        progressColor={progressColor}
        borderRadius={progressBarBorderRadius}
        colorType={colorType}
        width={progress}
        theme={theme}
      />
      <ProgressBarText color={contentColor} theme={theme}>
        {progress}
      </ProgressBarText>
    </StyledBar>
  );
};

const ProgressBar = withTheme(CustomProgressBar);

export { ProgressBar };
export type { IProgressBarProps, IBasicProgressBarProps };
