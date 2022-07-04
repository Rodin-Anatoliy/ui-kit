import type { Ref } from 'react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { withTheme } from '../../theme';
import type { IInputBaseProps } from '../GenericInput';
import { GenericInput } from '../GenericInput';
import { StyledTextAreaInput } from './Input.styles';

interface ITextAreaInputProps extends IInputBaseProps {
  withCounter?: boolean;
  onChange?: (value: string | number) => void;
  value?: string | number;
}

const CustomTextAreaInput: React.FC<
  ITextAreaInputProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = React.forwardRef(
  (
    {
      value,
      onChange,
      onFocus,
      onBlur,
      placeholder,
      label = '',
      error,
      withCounter,
      disabled,
      readOnly,
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
    const [inputValue, setInputValue] = useState<string>(value.toString());

    useEffect(() => {
      setInputValue(value.toString());
    }, [value]);

    useEffect(() => {
      if (isFocused) {
        inputRef?.current?.focus();
      } else {
        inputRef?.current?.blur();
        inputRef?.current?.setSelectionRange(
          inputValue?.length,
          inputValue?.length,
        );
      }
    }, [isFocused, inputValue]);

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

    const onMouseDownInputHandler = useCallback(
      (e: React.MouseEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        e.stopPropagation();
        onMouseDown && onMouseDown(e);
      },
      [onMouseDown],
    );

    const charsCount = useMemo(
      () => (withCounter && inputValue.length > 0 ? inputValue.length : 0),
      [inputValue, withCounter],
    );

    return (
      <GenericInput
        placeholder={placeholder}
        label={label}
        error={error}
        charsCount={charsCount}
        disabled={disabled}
        required={required}
        className={className}
        onClick={() => setIsFocused(true)}
        onMouseDown={(e) => e.preventDefault()}
        isLabelOrPlaceholderActivated={true}
        isFocused={isFocused}
        height="max"
      >
        <StyledTextAreaInput
          ref={inputRef}
          value={value}
          onChange={onChangeInputHandler}
          onFocus={onFocusInputHandler}
          onBlur={onBlurInputHandler}
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

CustomTextAreaInput.displayName = 'TextAreaInput';

const TextAreaInput = withTheme(CustomTextAreaInput);

export { TextAreaInput };
export type { ITextAreaInputProps };
