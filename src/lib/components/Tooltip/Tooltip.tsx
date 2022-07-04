import React, { useState } from 'react';

import type { ITheme } from '../../theme';
import { withTheme } from '../../theme';
import type { TooltipPosition } from './Tooltip.styles';
import { StyledTooltipContainer, StyledTooltipItem } from './Tooltip.styles';

interface ITooltipProps {
  text: string;
  theme: ITheme;
  position: TooltipPosition;
}

const CustomToolTip: React.FC<ITooltipProps> = ({
  text,
  theme,
  position,
  children,
}) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  return (
    <StyledTooltipContainer
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {children}
      {isShown && (
        <StyledTooltipItem theme={theme} position={position}>
          {text}
        </StyledTooltipItem>
      )}
    </StyledTooltipContainer>
  );
};

const Tooltip = withTheme(CustomToolTip);

export { Tooltip };
export type { ITooltipProps };
