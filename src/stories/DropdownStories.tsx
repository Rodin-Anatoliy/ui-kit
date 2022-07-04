import React, { useState } from 'react';
import { Title } from '../lib/styles/shared.styles';

import { DropdownInput } from '../lib/components/Input/DropdownInput';

export const DefaultDropdown = () => {
  const suggestions = [
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
    { value: '4', label: 'four' },
    { value: '5', label: 'five' },
  ];

  const customSuggestions = [
    { customValue: 1, customLabel: 'one' },
    { customValue: 2, customLabel: 'two' },
    { customValue: 3, customLabel: 'three' },
    { customValue: 4, customLabel: 'four' },
    { customValue: 5, customLabel: 'five' },
  ];

  const [value, setValue] = useState('');

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1' }}>
      <div style={{flex: '1', margin: '1rem'}}>
        <DropdownInput
          value={value}
          onChange={(suggest) => {
            setValue(suggest)
          }}
          suggestions={customSuggestions}
          getLabel={(item) => item.customLabel}
          getValue={(item) => item.customValue.toString()}
          label="Searchable & label"
          isSearchable
         
        />
      </div>

      <div style={{flex: '1', margin: '1rem'}}>
        <DropdownInput
          value={value}
          onChange={(suggest) => {
            setValue(suggest)
          }}
          getLabel={(item) => item.label}
          getValue={(item) => item.value}
          label="Not searchable"
          suggestions={suggestions}
        />
      </div>

      <div style={{flex: '1', margin: '1rem'}}>
        <DropdownInput
          value={value}
          onChange={(suggest) => {
            setValue(suggest)
          }}
          getLabel={(item) => item.label}
          getValue={(item) => item.value}
          label="Disabled"
          disabled
          suggestions={suggestions}
        />
      </div>
    </div>
  );
};

const DropdownUIKit = () => (
  <>
    <Title>Dropdown</Title>
    <div style={{flex: '1'}}>
      <DefaultDropdown />
    </div>
  </>
);

export { DropdownUIKit };
