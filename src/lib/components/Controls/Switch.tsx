import type { InputHTMLAttributes, Ref } from 'react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { withTheme } from '../../theme';
import { BasicControl } from './BasicControl';
import type { IControlProps } from './CheckBox';
import { Input, StyledSwitch, SwitchThumb } from './Control.styles';

const CustomSwitch: React.FC<
  IControlProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
> = React.forwardRef(
  (
    {
      checked,
      onChange,
      onFocus,
      onBlur,
      disabled,
      readOnly,
      required,
      label,
      textLocation,
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

    const borderRadius = useMemo(() => '20px', []);

    return (
      <BasicControl
        disabled={disabled}
        label={label}
        textLocation={textLocation}
        isFocused={isFocused}
        borderRadius={borderRadius}
        onClick={onClickInputHandler}
      >
        <StyledSwitch
          disabled={disabled}
          checked={checked}
          theme={theme}
          borderRadius={borderRadius}
        >
          <SwitchThumb
            borderRadius={borderRadius}
            disabled={disabled}
            checked={checked}
            theme={theme}
          />

          <Input
            type="checkbox"
            ref={inputRef}
            defaultChecked={checked}
            onFocus={onFocusInputHandler}
            onBlur={onBlurInputHandler}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            {...other}
          />
        </StyledSwitch>
      </BasicControl>
    );
  },
);

CustomSwitch.displayName = 'Switch';

const Switch = withTheme(CustomSwitch);

export { Switch };
