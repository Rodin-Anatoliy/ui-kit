import { styled } from '@linaria/react';

interface IStyledIconProps {
  src: string;
  width: string;
  height: string;
  color: string;
}

const StyledIcon = styled.div<IStyledIconProps>`
  mask: ${(props) => `url(${props.src}) center center no-repeat`};
  background-color: ${(props) => props?.color};
  mask-size: contain;
  width: ${(props) => props?.width};
  height: ${(props) => props?.height};
  margin: auto;
`;

interface IContainerProps {
  size?: 'large' | 'medium' | 'small';
}

const Container = styled.div<IContainerProps>`
  display: flex;
  width: ${(props) => {
    switch (props?.size) {
      case 'large':
        return '1.5rem';
      case 'medium':
        return '1.25rem';
      case 'small':
        return '1rem';
    }
  }};
  height: ${(props) => {
    switch (props?.size) {
      case 'large':
        return '1.5rem';
      case 'medium':
        return '1.25rem';
      case 'small':
        return '1rem';
    }
  }};
`;

export { StyledIcon, Container };
export type { IStyledIconProps };
