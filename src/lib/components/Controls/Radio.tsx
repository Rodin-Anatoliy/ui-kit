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
import { BasicControl } from './BasicControl';
import type { IControlProps } from './CheckBox';
import { ControlIconContainer, Input, StyledRadio } from './Control.styles';

const CustomRadio: React.FC<
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

    const borderRadius = useMemo(() => '50%', []);

    return (
      <BasicControl
        disabled={disabled}
        label={label}
        textLocation={textLocation}
        isFocused={isFocused}
        borderRadius={borderRadius}
        onClick={onClickInputHandler}
      >
        <StyledRadio
          borderRadius={borderRadius}
          checked={checked}
          disabled={disabled}
          theme={theme}
        >
          {checked && (
            <ControlIconContainer>
              <Icon
                name={IconNames.radioMark}
                size="small"
                color={theme.colors.white}
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
            readOnly={readOnly}
            required={required}
            {...other}
          />
        </StyledRadio>
      </BasicControl>
    );
  },
);

CustomRadio.displayName = 'Radio';

const Radio = withTheme(CustomRadio);

export { Radio };
