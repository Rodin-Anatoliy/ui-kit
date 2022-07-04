import React from 'react';

import { Icon, IconNames } from '../lib/components/Icon';
import { TempContainer, Title } from '../lib/styles/shared.styles';

const Icons: React.FC = () => (
  <TempContainer>
    {Object.keys(IconNames).map((icon) => (
      <Icon name={IconNames[icon]} key={icon} size="large" />
    ))}
  </TempContainer>
);

export const IconsUIKit: React.FC = () => (
  <>
    <Title>Icons</Title>
    <Icons />
  </>
);
