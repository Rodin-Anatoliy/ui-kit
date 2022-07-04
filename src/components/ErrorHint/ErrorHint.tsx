import { Icon } from 'components/Icon/Icon';
import React, { useState } from 'react';
import type { ITheme } from 'theme';
import { withTheme } from 'theme';

import { ErrorHintContainer, Hint } from './ErrorHint.styles';

interface IErrorHintProps {
  text: string;
  theme: ITheme;
}

const CustomErrorHint: React.FC<IErrorHintProps> = ({ text, theme }) => {
  const [isHintVisible, setIsHintVisible] = useState(false);
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHintVisible(true);
  };

  return (
    <ErrorHintContainer
      onMouseEnter={() => setIsHintVisible(true)}
      onMouseLeave={() => setIsHintVisible(false)}
      onClick={clickHandler}
    >
      <Icon name="warning" size="medium" color={theme.error.default} />
      {isHintVisible && <Hint theme={theme}>{text}</Hint>}
    </ErrorHintContainer>
  );
};

const ErrorHint = withTheme(CustomErrorHint);

export { ErrorHint };
export type { IErrorHintProps };
