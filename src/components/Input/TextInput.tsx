import type { IInputBaseProps } from 'components/GenericInput/index';
import { GenericInput } from 'components/GenericInput/index';
import type { TIconName } from 'components/Icon/Icon';
import type { Ref } from 'react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { withTheme } from 'theme';

import { StyledInput } from './Input.styles';

interface ITextInputProps extends IInputBaseProps {
  withCounter?: boolean;
  leftIcon?: TIconName;
  rightIcon?: TIconName;
  value?: string | number;
  onChange?: (value: string) => void;
  type?: 'text' | 'password';
}

const CustomTextInput: React.FC<
  ITextInputProps &
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
      leftIcon,
      rightIcon,
      withCounter,
      disabled,
      readOnly,
      onLeftIconClick,
      onRightIconClick,
      required,
      className,
      theme,
      type = 'text',
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
      (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        onChange && onChange(e.target.value.trimStart());
      },
      [onChange],
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
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        charsCount={charsCount}
        disabled={disabled}
        onLeftIconClick={onLeftIconClick}
        onRightIconClick={onRightIconClick}
        required={required}
        className={className}
        onClick={() => !disabled && setIsFocused(true)}
        onMouseDown={(e) => e.preventDefault()}
        isFocused={isFocused}
        isLabelOrPlaceholderActivated={isFocused || !!inputValue}
      >
        <StyledInput
          ref={inputRef}
          value={inputValue}
          onChange={onChangeInputHandler}
          onFocus={onFocusInputHandler}
          onBlur={onBlurInputHandler}
          type={type}
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

CustomTextInput.displayName = 'TextInput';

const TextInput = withTheme(CustomTextInput);

export { TextInput };
export type { ITextInputProps };
