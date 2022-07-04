import React, { useState } from 'react';
import { ControlContainer, ControlRow, Title } from '../lib/styles/shared.styles';

import { Radio } from '../lib/components/Controls/index';
import { Switch } from '../lib/components/Controls/index';
import { CheckBox } from '../lib/components/Controls/index';

export const Controls = () => {
  const [isCheckFirstSwitch, setIsCheckFirstSwitch] = useState<boolean>(true);
  const [isCheckFirstSwitchDisable, setIsCheckFirstSwitchDisable] =
    useState<boolean>(true);

  const [isCheckSecondSwitch, setIsCheckSecondSwitch] =
    useState<boolean>(false);
  const [isCheckSecondSwitchDisable, setIsCheckSecondSwitchDisable] =
    useState<boolean>(false);

  const [isCheckFirstCheckbox, setIsCheckFirstCheckbox] =
    useState<boolean>(true);
  const [isCheckFirstCheckboxDisabled, setIsCheckFirstCheckboxDisabled] =
    useState<boolean>(true);

  const [isCheckSecondCheckbox, setIsCheckSecondCheckbox] =
    useState<boolean>(true);
  const [isCheckSecondCheckboxDisabled, setIsCheckSecondCheckboxDisabled] =
    useState<boolean>(true);
  
  const [isCheckThirdCheckbox, setIsCheckThirdCheckbox] =
    useState<boolean>(true);
  const [isCheckThirdCheckboxDisabled, setIsCheckThirdCheckboxDisabled] =
    useState<boolean>(true);
  
  const [isCheckFourCheckbox, setIsCheckFourCheckbox] =
    useState<boolean>(true);
  const [isCheckFourCheckboxDisabled, setIsCheckFourCheckboxDisabled] =
    useState<boolean>(true);

  const [isCheckFirstRadio, setIsCheckFirstRadio] = useState<boolean>(true);
  const [isCheckFirstRadioDisabled, setIsCheckFirstRadioDisabled] =
    useState<boolean>(true);

  const [isCheckSecondRadio, setIsCheckSecondRadio] = useState<boolean>(false);
  const [isCheckSecondRadioDisabled, setIsCheckSecondRadioDisabled] =
    useState<boolean>(false);

  const [isCheckRadioRightText, setIsCheckRadioRightText] =
    useState<boolean>(true);
  const [isCheckRadioLeftText, setIsCheckRadioLeftText] =
    useState<boolean>(true);

  const [isCheckRightText, setIsCheckRightText] = useState<boolean>(true);
  const [isCheckLeftText, setIsCheckLeftText] = useState<boolean>(true);

  const [isCheckSwitchRightText, setIsCheckSwitchRightText] =
    useState<boolean>(true);
  const [isCheckSwitchLeftText, setIsCheckSwitchLeftText] =
    useState<boolean>(true);
  return (
    <div>
      <ControlRow>
        <ControlContainer>
          <Switch
            checked={isCheckFirstSwitch}
            onChange={setIsCheckFirstSwitch}
          />
        </ControlContainer>

        <ControlContainer>
          <Switch
            checked={isCheckFirstSwitchDisable}
            onChange={setIsCheckFirstSwitchDisable}
            disabled
          />
        </ControlContainer>
      </ControlRow>

      <ControlRow>
        <ControlContainer>
          <Switch
            checked={isCheckSecondSwitch}
            onChange={setIsCheckSecondSwitch}
          />
        </ControlContainer>

        <ControlContainer>
          <Switch
            checked={isCheckSecondSwitchDisable}
            onChange={setIsCheckSecondSwitchDisable}
            disabled
          />
        </ControlContainer>
      </ControlRow>

      <ControlRow>
        <ControlContainer>
          <CheckBox
            checked={isCheckFirstCheckbox}
            onChange={setIsCheckFirstCheckbox}
          />
        </ControlContainer>

        <ControlContainer>
          <CheckBox
            checked={isCheckFirstCheckboxDisabled}
            onChange={setIsCheckFirstCheckboxDisabled}
            disabled
          />
        </ControlContainer>
      </ControlRow>

      <ControlRow>
        <ControlContainer>
          <CheckBox
            checked={isCheckSecondCheckbox}
            multiCheck
            onChange={setIsCheckSecondCheckbox}
          />
        </ControlContainer>

        <ControlContainer>
          <CheckBox
            checked={isCheckSecondCheckboxDisabled}
            multiCheck
            onChange={setIsCheckSecondCheckboxDisabled}
            disabled
          />
        </ControlContainer>
      </ControlRow>

      <ControlRow>
        <ControlContainer>
          <CheckBox
            checked={isCheckThirdCheckbox}
            checkType='partial'
            multiCheck
            onChange={setIsCheckThirdCheckbox}
          />
        </ControlContainer>

        <ControlContainer>
          <CheckBox
            checked={isCheckThirdCheckboxDisabled}
            checkType='partial'
            multiCheck
            onChange={setIsCheckThirdCheckboxDisabled}
            disabled
          />
        </ControlContainer>
      </ControlRow>

      <ControlRow>
        <ControlContainer>
          <CheckBox
            checked={isCheckFourCheckbox}
            multiCheck
            checkType='full'
            onChange={setIsCheckFourCheckbox}
          />
        </ControlContainer>

        <ControlContainer>
          <CheckBox
            checked={isCheckFourCheckboxDisabled}
            multiCheck
            checkType='full'
            onChange={setIsCheckFourCheckboxDisabled}
            disabled
          />
        </ControlContainer>
      </ControlRow>

      <ControlRow>
        <ControlContainer>
          <Radio
            checked={isCheckFirstRadio}
            onChange={setIsCheckFirstRadio}
          />
        </ControlContainer>

        <ControlContainer>
          <Radio
            checked={isCheckFirstRadioDisabled}
            onChange={setIsCheckFirstRadioDisabled}
            disabled
          />
        </ControlContainer>
      </ControlRow>

      <ControlRow>
        <ControlContainer>
          <Radio
            checked={isCheckSecondRadio}
            onChange={setIsCheckSecondRadio}
          />
        </ControlContainer>

        <ControlContainer>
          <Radio
            checked={isCheckSecondRadioDisabled}
            onChange={setIsCheckSecondRadioDisabled}
            disabled
          />
        </ControlContainer>
      </ControlRow>

      <ControlRow>
        <ControlContainer>
          <Radio
            checked={isCheckRadioRightText}
            onChange={setIsCheckRadioRightText}
            label="Text"
            textLocation="right"
          />
        </ControlContainer>

        <ControlContainer>
          <Radio
            checked={isCheckRadioLeftText}
            onChange={setIsCheckRadioLeftText}
            label="Text"
            textLocation="left"
            disabled
          />
        </ControlContainer>
      </ControlRow>

      <ControlRow>
        <ControlContainer>
          <CheckBox
            checked={isCheckRightText}
            onChange={setIsCheckRightText}
            label="Text"
            textLocation="right"
          />
        </ControlContainer>

        <ControlContainer>
          <CheckBox
            checked={isCheckLeftText}
            onChange={setIsCheckLeftText}
            label="Text"
            textLocation="left"
            disabled
          />
        </ControlContainer>
      </ControlRow>

      <ControlRow>
        <ControlContainer>
          <Switch
            checked={isCheckSwitchRightText}
            onChange={setIsCheckSwitchRightText}
            label="Text"
            textLocation="right"
          />
        </ControlContainer>

        <ControlContainer>
          <Switch
            checked={isCheckSwitchLeftText}
            onChange={setIsCheckSwitchLeftText}
            label="Text"
            textLocation="left"
            disabled
          />
        </ControlContainer>
      </ControlRow>
    </div>
  );
};

const ControlsUIKit = () => (
  <>
    <Title>Controls</Title>
    <Controls />
  </>
);
export { ControlsUIKit };
