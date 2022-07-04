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
import ClickAwayListener from 'react-click-away-listener';
import { withTheme } from 'theme';

import {
  DropdownContainer,
  Suggestion,
  SuggestionsContainer,
} from './DropdownInput.styles';
import { StyledInput } from './Input.styles';

interface ISuggestion {
  id: string;
  title: string;
}

interface IDropdownInputProps<T = string> extends IInputBaseProps {
  withCounter?: boolean;
  leftIcon?: TIconName;
  value?: string | number;
  onChange?: (value: string) => void;
  type?: 'text' | 'password';
  suggestions: T[];
  extractTitle?: (item: T) => string;
  extractId?: (item: T) => string;
}

const CustomDropdownInput: React.FC<
  IDropdownInputProps &
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
      withCounter,
      disabled,
      onLeftIconClick,
      onRightIconClick,
      required,
      className,
      theme,
      suggestions,
      readOnly,
      ...other
    },
    ref: Ref<HTMLInputElement & HTMLTextAreaElement>,
  ) => {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [content, setContent] = useState<string>('');

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

    const charsCount = useMemo(
      () => (withCounter && content.length > 0 ? content.length : 0),
      [content, withCounter],
    );

    useEffect(() => {
      if (value) {
        const suggest = suggestions.find((item) => item === value);
        if (suggest) {
          setContent(suggest);
        }
      } else {
        setContent('');
      }
    }, [value, suggestions]);

    const onChooseSuggestionHandler = (suggestion) => {
      onChange(suggestion);
      setIsFocused(false);
    };

    const dropdownIcon = useMemo(() => {
      if (content) {
        return 'cross';
      } else if (isFocused) {
        return 'chevronUp';
      } else {
        return 'chevronDown';
      }
    }, [content, isFocused]);

    const onRightIconClickHandler = (e) => {
      if (!disabled) {
        switch (dropdownIcon) {
          case 'cross':
            setContent('');
            break;
          case 'chevronUp':
            setIsFocused(false);
            break;
          case 'chevronDown':
            setIsFocused(true);
            break;
        }
      }
      onRightIconClick && onRightIconClick(e);
    };

    return (
      <DropdownContainer onMouseDown={(e) => e.preventDefault()}>
        <GenericInput
          placeholder={placeholder}
          label={label}
          error={error}
          leftIcon={leftIcon}
          rightIcon={dropdownIcon}
          charsCount={charsCount}
          disabled={disabled}
          onLeftIconClick={onLeftIconClick}
          onRightIconClick={onRightIconClickHandler}
          required={required}
          className={className}
          onClick={() => !disabled && setIsFocused(true)}
          isFocused={isFocused}
          isLabelOrPlaceholderActivated={!!content}
        >
          <StyledInput
            ref={inputRef}
            value={content}
            onFocus={onFocusInputHandler}
            onBlur={onBlurInputHandler}
            type="text"
            disabled={disabled}
            readOnly
            required={required}
            theme={theme}
            {...other}
          />
        </GenericInput>

        {isFocused && (
          <SuggestionsContainer theme={theme}>
            {suggestions.map((item, index) => (
              <Suggestion
                theme={theme}
                key={index}
                onClick={() => {
                  onChooseSuggestionHandler(item);
                }}
              >
                {item}
              </Suggestion>
            ))}
          </SuggestionsContainer>
        )}
      </DropdownContainer>
    );
  },
);

CustomDropdownInput.displayName = 'DropdownInput';

const DropdownWithTheme = withTheme(CustomDropdownInput);

export { DropdownWithTheme as DropdownInput };
export type { IDropdownInputProps };
