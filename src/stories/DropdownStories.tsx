import React, { useState } from 'react';
import { Title } from 'styles/shared.styles';

import { DropdownInput } from 'components/Input/DropdownInput';
import { styled } from '@linaria/react';

const DropdownStoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 3rem 18rem 3rem;
`;

export const DefaultDropdown = () => {
  const [value, setValue] = useState('');

  return (
    <DropdownInput
      value={value}
      onChange={(suggest) => {
        setValue(suggest)
      }}
      readOnly
      label="label"
      suggestions={['one', 'two', 'three', 'four', 'five', 'six']}
    />
  );
};

const DropdownUIKit = () => (
  <>
    <Title>Dropdown</Title>
    <DropdownStoryContainer>
      <DefaultDropdown />
    </DropdownStoryContainer>
  </>
);

export { DropdownUIKit };
