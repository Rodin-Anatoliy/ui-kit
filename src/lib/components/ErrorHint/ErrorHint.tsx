import React from 'react';

import type { ITheme } from '../../theme';
import { withTheme } from '../../theme';
import { Icon, IconNames } from '../Icon';
import { Tooltip } from '../Tooltip';
import { ErrorHintContainer } from './ErrorHint.styles';

interface IErrorHintProps {
  text: string;
  theme: ITheme;
}

const CustomErrorHint: React.FC<IErrorHintProps> = ({ text, theme }) => (
  <ErrorHintContainer>
    <Tooltip position="top-left" text={text}>
      <Icon
        name={IconNames.warning}
        size="medium"
        color={theme.error.default}
      />
    </Tooltip>
  </ErrorHintContainer>
);

const ErrorHint = withTheme(CustomErrorHint);

export { ErrorHint };
export type { IErrorHintProps };
