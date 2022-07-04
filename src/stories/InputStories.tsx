import { styled } from '@linaria/react';
import { NumberInput } from 'components/Input/NumberInput';
import { PasswordInput } from 'components/Input/PasswordInput';
import { TextAreaInput } from 'components/Input/TextAreaInput';
import { TextInput } from 'components/Input/TextInput';
import React, { useState } from 'react';
import { Subtitle, TempContainer, Title } from 'styles/shared.styles';

const InputStoryContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const InputStoryContainerSmall = styled(InputStoryContainer)`
  width: 150px;
`;

export const DefaultTextInput = () => {
  const [value, setValue] = useState('');
  return (
    <TempContainer>
      <InputStoryContainer>
        <TextInput
          label="full width"
          value={value}
          onChange={(state) => setValue(state)}
          required
        />
      </InputStoryContainer>
      <InputStoryContainerSmall>
        <TextInput
          label="small"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </InputStoryContainerSmall>
      <InputStoryContainer>
        <TextInput
          label="full width with counter"
          value={value}
          onChange={(state) => setValue(state)}
          withCounter
        />
      </InputStoryContainer>
      <InputStoryContainer>
        <TextInput
          placeholder="placeholder"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </InputStoryContainer>
      <InputStoryContainer>
        <TextInput
          label="disabled"
          leftIcon="test"
          value={value}
          onChange={(state) => setValue(state)}
          disabled
        />
      </InputStoryContainer>
    </TempContainer>
  );
};

export const WithIcons = () => {
  const [value, setValue] = useState('');
  return (
    <TempContainer>
      <InputStoryContainer>
        <TextInput
          label="with start icon"
          leftIcon="test"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </InputStoryContainer>
      <InputStoryContainer>
        <TextInput
          label="with right icon"
          rightIcon="test"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </InputStoryContainer>
      <InputStoryContainer>
        <TextInput
          label="with start & right icon"
          leftIcon="test"
          rightIcon="test"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </InputStoryContainer>
    </TempContainer>
  );
};

export const WithError = () => {
  const [value, setValue] = useState('');

  return (
    <TempContainer>
      <InputStoryContainer>
        <TextInput
          label="full width"
          error="123456 78912 345678 912345 678912"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </InputStoryContainer>
      <InputStoryContainerSmall>
        <TextInput
          label="small"
          error="123456 78912 345678 912345 678912"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </InputStoryContainerSmall>
    </TempContainer>
  );
};

export const DefaultPasswordInputs = () => {
  const [value, setValue] = useState('');

  return (
    <TempContainer>
      <InputStoryContainer>
        <PasswordInput
          label="Password"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </InputStoryContainer>
      <InputStoryContainer>
        <PasswordInput
          label="Password"
          value={value}
          onChange={(state) => setValue(state)}
          leftIcon="test"
        />
      </InputStoryContainer>
      <InputStoryContainer>
        <PasswordInput
          label="Password"
          value={value}
          onChange={(state) => setValue(state)}
          leftIcon="test"
          disabled
        />
      </InputStoryContainer>
      <InputStoryContainerSmall>
        <PasswordInput
          label="Password"
          value={value}
          onChange={(state) => setValue(state)}
          error="1111 11111 11111 111111 11111"
        />
      </InputStoryContainerSmall>
    </TempContainer>
  );
};

export const DefaultNumberInputs = () => {
  const [value, setValue] = useState('');

  return (
    <TempContainer>
      <InputStoryContainer>
        <NumberInput
          label="Number"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </InputStoryContainer>
      <InputStoryContainer>
        <NumberInput
          label="Number"
          value={value}
          onChange={(state) => setValue(state)}
          leftIcon="test"
          rightIcon="test"
        />
      </InputStoryContainer>
      <InputStoryContainer>
        <NumberInput
          label="Number"
          value={value}
          onChange={(state) => setValue(state)}
          leftIcon="test"
          disabled
        />
      </InputStoryContainer>
      <InputStoryContainerSmall>
        <NumberInput
          label="Number"
          value={value}
          onChange={(state) => setValue(state)}
          error="1111 11111 11111 111111 11111"
        />
      </InputStoryContainerSmall>
    </TempContainer>
  );
};

export const DefaultTextAreaInput = () => {
  const [value, setValue] = useState('');

  return (
    <TempContainer style={{ minHeight: '200px' }}>
      <InputStoryContainer>
        <TextAreaInput
          label="TextArea"
          value={value}
          onChange={(state) => setValue(state)}
          error="555555 dddddddd ddddddddddd ddddddddddd ddddddddddd dddddddddddd ddddddddddddd ddddddddd"
        />
      </InputStoryContainer>
      <InputStoryContainer>
        <TextAreaInput
          label="TextArea"
          value={value}
          onChange={(state) => setValue(state)}
          disabled
        />
      </InputStoryContainer>
      <InputStoryContainerSmall>
        <TextAreaInput
          label="TextArea"
          value={value}
          onChange={(state) => setValue(state)}
        />
      </InputStoryContainerSmall>
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
