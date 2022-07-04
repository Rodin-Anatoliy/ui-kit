import type { Ref } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { withTheme } from '../../theme';
import type { IInputBaseProps } from '../GenericInput';
import { GenericInput } from '../GenericInput';
import type { IconNames } from '../Icon';
import { StyledInput } from './Input.styles';

interface INumberInputProps extends IInputBaseProps {
  leftIcon?: IconNames;
  rightIcon?: IconNames;
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
      onMouseDown,
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

    const onMouseDownInputHandler = useCallback(
      (e: React.MouseEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        e.stopPropagation();
        onMouseDown && onMouseDown(e);
      },
      [onMouseDown],
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
          value={value}
          onChange={onChangeInputHandler}
          onFocus={onFocusInputHandler}
          onBlur={onBlurInputHandler}
          onKeyDown={onKeyDownInputHandler}
          type="number"
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          onMouseDown={onMouseDownInputHandler}
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
