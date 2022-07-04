import type { IInputBaseProps } from 'components/GenericInput/index';
import { GenericInput } from 'components/GenericInput/index';
import type { TIconName } from 'components/Icon/Icon';
import type { Ref } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { withTheme } from 'theme';

import { StyledInput } from './Input.styles';

interface INumberInputProps extends IInputBaseProps {
  leftIcon?: TIconName;
  rightIcon?: TIconName;
  onChange?: (value: string | number) => void;
  value?: string | number;
}

const CustomNumberInput: React.FC<
  INumberInputProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = React.forwardRef(
  (
    {
      value,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      placeholder,
      label = '',
      error,
      leftIcon,
      rightIcon,
      disabled,
      readOnly,
      onLeftIconClick,
      onRightIconClick,
      required,
      className,
      theme,
      ...other
    },
    ref: Ref<HTMLInputElement & HTMLTextAreaElement>,
  ) => {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value.toString());

    useEffect(() => {
      setInputValue(value.toString());
    }, [value]);

    useEffect(() => {
      if (isFocused) {
        inputRef?.current?.focus();
      } else {
        inputRef?.current?.blur();
      }
    }, [isFocused]);

    const onFocusInputHandler = useCallback(
      (e: React.FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        setIsFocused(true);
        onFocus && onFocus(e);
      },
      [onFocus],
    );

    const onBlurInputHandler = useCallback(
      (e: React.FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        setIsFocused(false);
        onBlur && onBlur(e);
      },
      [onBlur],
    );

    const onChangeInputHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) =>
        onChange && onChange(e.target.value.trimStart()),
      [onChange],
    );

    const onKeyDownInputHandler = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const symbols = ['-', '+', 'e', 'E', '.'];
        symbols.includes(e.key) && e.preventDefault();
        onKeyDown && onKeyDown(e);
      },
      [onKeyDown],
    );

    return (
      <GenericInput
        placeholder={placeholder}
        label={label}
        error={error}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled}
        onLeftIconClick={onLeftIconClick}
        onRightIconClick={onRightIconClick}
        onMouseDown={(e) => e.preventDefault()}
        required={required}
        className={className}
        onClick={() => setIsFocused(true)}
        isFocused={isFocused}
        isLabelOrPlaceholderActivated={isFocused || !!inputValue}
      >
        <StyledInput
          ref={inputRef}
          value={inputValue}
          onChange={onChangeInputHandler}
          onFocus={onFocusInputHandler}
          onBlur={onBlurInputHandler}
          onKeyDown={onKeyDownInputHandler}
          type="number"
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          theme={theme}
          {...other}
        />
      </GenericInput>
    );
  },
);

CustomNumberInput.displayName = 'NumberInput';

const NumberInput = withTheme(CustomNumberInput);

export { NumberInput };
export type { INumberInputProps };
