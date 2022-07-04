import React, { useState } from 'react';
import { Title } from 'styles/shared.styles';

import { Dropdown } from './Dropdown';
import { DropdownStoryContainer } from './Dropdown.styles';

export const DefaultDropdown = () => {
  const [value, setValue] = useState('');

  return (
    <Dropdown
      value={value}
      onChange={(e) => {
        setValue(e);
      }}
      placeholder="placeholder"
      suggestions={['one', 'two', 'three', 'four', 'five', 'six']}
      // suggestions={[
      //   { id: 1, title: 'one' },
      //   { id: 2, title: 'two' },
      //   { id: 3, title: 'three' },
      //   { id: 4, title: 'four' },
      //   { id: 5, title: 'five' },
      //   { id: 6, title: 'six' },
      // ]}
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
