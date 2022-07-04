import React, { useMemo } from 'react';

import type { ITheme } from '../../theme';
import { withTheme } from '../../theme';
import { StyledTag, TagContent } from './Tag.styles';

interface IBasicTagProps {
  colorType?:
    | 'primary'
    | 'negative'
    | 'positive'
    | 'accent'
    | 'in-progress'
    | 'white'
    | 'black';
  type?: 'filled' | 'half-opacity' | 'no-fill' | 'outlined' | 'colored-content';
  noMargin?: boolean;
  isFilter?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  contentColor?: string;
  borderRadius?: string;
  theme: ITheme;
}

const Tag: React.FC<IBasicTagProps> = ({
  type = 'filled',
  colorType,
  isFilter,
  children,
  noMargin,
  borderColor,
  backgroundColor,
  contentColor,
  theme,
  ...other
}) => {
  const color = useMemo(() => {
    if (contentColor) {
      return contentColor;
    } else if (type === 'filled' || !type) {
      return colorType === 'white'
        ? theme.colors.dark_gray
        : theme.text.secondary;
    } else {
      switch (colorType) {
        case 'primary':
          return theme.colors.primary.default;
        case 'negative':
          return theme.colors.secondary.negative.default;
        case 'positive':
          return theme.colors.secondary.positive.default;
        case 'accent':
          return theme.colors.secondary.accent.default;
        case 'in-progress':
          return theme.colors.secondary.inProgress.default;
        case 'white':
          return type === 'outlined' ||
            type === 'no-fill' ||
            type === 'half-opacity'
            ? theme.colors.white
            : theme.colors.dark_gray;
        case 'black':
          return theme.colors.black;
        default:
          return theme.colors.dark_gray;
      }
    }
  }, [theme, type, colorType, contentColor]);

  return (
    <StyledTag
      color={color}
      isFilter={isFilter}
      colorType={colorType}
      type={type}
      noMargin={noMargin}
      theme={theme}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      {...other}
    >
      <TagContent>{children}</TagContent>
    </StyledTag>
  );
};

const TagWithTheme = withTheme(Tag);

export { TagWithTheme as Tag };
export type { IBasicTagProps };
