/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';

import { Container, StyledIcon } from './Icon.styles';

type TIconName =
  | 'test'
  | 'chevronDown'
  | 'visible'
  | 'notVisible'
  | 'warning'
  | 'chevronUp'
  | 'cross';
type TIconSize = 'large' | 'medium' | 'small';

interface IIconProps {
  name: TIconName;
  size?: TIconSize;
  color?: string;
}

interface IIconsDictProps {
  src: string;
  width?: string;
  height?: string;
  color: string;
}

const iconsDict: { [key in TIconName]: IIconsDictProps } = {
  test: {
    src: require('assets/icons/test-icon.svg'),
    width: '66.7%',
    height: '66.7%',
    color: 'black',
  },
  chevronDown: {
    src: require('assets/icons/chevron-down.svg'),
    width: '50%',
    height: '29.2%',
    color: 'black',
  },
  chevronUp: {
    src: require('assets/icons/chevron-up.svg'),
    width: '50%',
    height: '29.2%',
    color: 'black',
  },
  visible: {
    src: require('assets/icons/visible.svg'),
    width: '83.4%',
    height: '66.7%',
    color: 'black',
  },
  notVisible: {
    src: require('assets/icons/not_visible.svg'),
    width: '83.4%',
    height: '66.7%',
    color: 'black',
  },
  warning: {
    src: require('assets/icons/warning-icon.svg'),
    width: '80%',
    height: '80%',
    color: 'black',
  },
  cross: {
    src: require('assets/icons/cross.svg'),
    width: '58.33%',
    height: '58.33%',
    color: 'black',
  },
};

const Icon: React.FC<IIconProps & React.HTMLAttributes<HTMLDivElement>> = ({
  name,
  size,
  color,
  ...props
}) => {
  const icon = iconsDict[name];

  return (
    <Container size={size} {...props}>
      <StyledIcon
        width={icon?.width ? icon?.width : '100%'}
        height={icon?.height ? icon?.height : '100%'}
        color={color ? color : icon?.color}
        src={icon.src}
      />
    </Container>
  );
};

export { Icon, iconsDict };
export type { TIconName, IIconProps, IIconsDictProps };
