import type { InputHTMLAttributes, Ref } from 'react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { withTheme } from '../../theme';
import { Icon, IconNames } from '../Icon/Icon';
import type { IBasicControlProps } from './BasicControl';
import { BasicControl } from './BasicControl';

interface IControlProps extends IBasicControlProps {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
}

interface IOptionalCheckBoxProps {
  checkType?: 'single' | 'partial' | 'full';
  multiCheck?: boolean;
}

type ICheckBoxProps = IControlProps & IOptionalCheckBoxProps;

import { ControlIconContainer, Input, StyledCheckBox } from './Control.styles';

const CustomCheckBox: React.FC<
  ICheckBoxProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
> = React.forwardRef(
  (
    {
      checked,
      onChange,
      onFocus,
      onBlur,
      disabled,
      label,
      textLocation,
      multiCheck = false,
      checkType = 'single',
      theme,
      ...other
    },
    ref: Ref<HTMLInputElement>,
  ) => {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (isFocused) {
        inputRef?.current?.focus();
      } else {
        inputRef?.current?.blur();
      }
    }, [isFocused]);

    const onFocusInputHandler = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus && onFocus(e);
      },
      [onFocus],
    );

    const onBlurInputHandler = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur && onBlur(e);
      },
      [onBlur],
    );

    const onClickInputHandler = useCallback(() => {
      if (!disabled) {
        setIsFocused(true);
        onChange && onChange(!checked);
      }
    }, [disabled, onChange, checked]);

    const borderRadius = useMemo(
      () => (multiCheck ? '4px' : '8px'),
      [multiCheck],
    );

    return (
      <BasicControl
        disabled={disabled}
        label={label}
        textLocation={textLocation}
        isFocused={isFocused}
        borderRadius={borderRadius}
        onClick={onClickInputHandler}
      >
        <StyledCheckBox
          checked={checked}
          disabled={disabled}
          multiCheck={multiCheck}
          checkType={checkType}
          borderRadius={borderRadius}
          theme={theme}
        >
          {checked && (
            <ControlIconContainer>
              <Icon
                name={
                  checkType === 'partial'
                    ? IconNames.minus
                    : IconNames.checkMark
                }
                size="small"
                color={
                  checkType === 'full' || !multiCheck
                    ? theme.colors.white
                    : theme.colors.primary.default
                }
              />
            </ControlIconContainer>
          )}

          <Input
            type="checkbox"
            ref={inputRef}
            defaultChecked={checked}
            onFocus={onFocusInputHandler}
            onBlur={onBlurInputHandler}
            disabled={disabled}
            {...other}
          />
        </StyledCheckBox>
      </BasicControl>
    );
  },
);

CustomCheckBox.displayName = 'CheckBox';

const CheckBox = withTheme(CustomCheckBox);

export { CheckBox };
export type { ICheckBoxProps, IOptionalCheckBoxProps, IControlProps };
