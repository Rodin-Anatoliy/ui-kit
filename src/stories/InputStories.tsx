import React, { useState } from 'react';

import { Subtitle, TempContainer, Title } from '../lib/styles/shared.styles';
import { NumberInput } from '../lib/components/Input/NumberInput';
import { PasswordInput } from '../lib/components/Input/PasswordInput';
import { TextAreaInput } from '../lib/components/Input/TextAreaInput';
import { TextInput } from '../lib/components/Input/TextInput';
import { IconNames } from '../lib/components/Icon';
import { NumberCounter, SelectInput } from '../lib/components/Input';



export const DefaultTextInput = () => {
  const [value, setValue] = useState('');
  
  const [suggestions] = useState([
    { value: '0', label: 'Rounds # 0' },
    { value: '1', label: 'Rounds # 1' },
    { value: '2', label: 'Rounds # 2' },
    { value: '3', label: 'Rounds # 3' },
    { value: '4', label: 'Rounds # 4' },
  ]);

  const [selectValue, setSelectValue] = useState(suggestions[0].value);

  return (
    <TempContainer>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextInput
          label="full width"
          value={value}
          onChange={(state) => setValue(state)}
          required
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '150px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextInput
          label="small"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextInput
          label="full width with counter"
          value={value}
          onChange={(state) => setValue(state)}
          withCounter
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextInput
          placeholder="placeholder"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextInput
          label="disabled"
          leftIcon={IconNames.test}
          value={value}
          onChange={(state) => setValue(state)}
          disabled
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '200px',
          justifyContent: 'flex-end',
          paddingLeft: '20px',
          marginBottom: '16px',
        }}
      >
        <SelectInput 
          values={suggestions} value={selectValue} onChange={setSelectValue}          
        />
      </div>
    </TempContainer>
  );
};

export const WithIcons = () => {
  const [value, setValue] = useState('');
  return (
    <TempContainer>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextInput
          label="with start icon"
          leftIcon={IconNames.test}
          value={value}
          onChange={(state) => setValue(state)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextInput
          label="with right icon"
          rightIcon={IconNames.test}
          value={value}
          onChange={(state) => setValue(state)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextInput
          label="with start & right icon"
          leftIcon={IconNames.test}
          rightIcon={IconNames.test}
          value={value}
          onChange={(state) => setValue(state)}
        />
      </div>
    </TempContainer>
  );
};

export const WithError = () => {
  const [value, setValue] = useState('');
  const [hours, setHours] = useState(0);

  return (
    <TempContainer>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextInput
          label="full width"
          error="123456 78912 345678 912345 678912"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '150px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextInput
          label="small"
          error="123456 78912 345678 912345 678912"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </div>
      <div>
        <NumberCounter
          prefix={'h'}
          value={hours}
          increment={() =>
            setHours(hours >= 23 ? 0 : hours + 1)
          }
          decrement={() =>
            setHours(hours === 0 ? 23 : hours - 1 )
          }
        />
      </div>
    </TempContainer>
  );
};

export const DefaultPasswordInputs = () => {
  const [value, setValue] = useState('');

  return (
    <TempContainer>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <PasswordInput
          label="Password"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <PasswordInput
          label="Password"
          value={value}
          onChange={(state) => setValue(state)}
          leftIcon={IconNames.test}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <PasswordInput
          label="Password"
          value={value}
          onChange={(state) => setValue(state)}
          leftIcon={IconNames.test}
          disabled
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '150px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <PasswordInput
          label="Password"
          value={value}
          onChange={(state) => setValue(state)}
          error="1111 11111 11111 111111 11111"
        />
      </div>
    </TempContainer>
  );
};

export const DefaultNumberInputs = () => {
  const [value, setValue] = useState('');

  return (
    <TempContainer>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <NumberInput
          label="Number"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <NumberInput
          label="Number"
          value={value}
          onChange={(state) => setValue(state)}
          leftIcon={IconNames.test}
          rightIcon={IconNames.test}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <NumberInput
          label="Number"
          value={value}
          onChange={(state) => setValue(state)}
          leftIcon={IconNames.test}
          disabled
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '150px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <NumberInput
          label="Number"
          value={value}
          onChange={(state) => setValue(state)}
          error="1111 11111 11111 111111 11111"
        />
      </div>
    </TempContainer>
  );
};

export const DefaultTextAreaInput = () => {
  const [value, setValue] = useState('');

  return (
    <TempContainer style={{ minHeight: '200px' }}>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextAreaInput
          label="TextArea"
          value={value}
          onChange={(state) => setValue(state)}
          error="555555 dddddddd ddddddddddd ddddddddddd ddddddddddd dddddddddddd ddddddddddddd ddddddddd"
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextAreaInput
          label="TextArea"
          value={value}
          onChange={(state) => setValue(state)}
          disabled
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '150px',
          justifyContent: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <TextAreaInput
          label="TextArea"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </div>
    </TempContainer>
  );
};

const InputUIKit = () => (
  <>
    <Title>Inputs</Title>
    <Subtitle>Text inputs</Subtitle>
    <DefaultTextInput />
    <WithIcons />
    <WithError />
    <Subtitle>Password inputs</Subtitle>
    <DefaultPasswordInputs />
    <Subtitle>Number inputs</Subtitle>
    <DefaultNumberInputs />
    <Subtitle>Textarea inputs</Subtitle>
    <DefaultTextAreaInput />
  </>
);

export { InputUIKit };
