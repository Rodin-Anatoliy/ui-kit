import chevronDown from 'assets/icons/chevron-down.svg';
import chevronUp from 'assets/icons/chevron-up.svg';
import type { IInputBaseProps } from 'components/GenericInput';
import { GenericInput } from 'components/GenericInput';
import type { TIconName } from 'components/Icon/Icon';
import { StyledInput } from 'components/Input';
import { TextInput } from 'components/Input/TextInput';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { useTheme } from 'theme';

import { Content } from './Content';
import {
  DropdownContainer,
  Suggestion,
  SuggestionsContainer,
} from './Dropdown.styles';

interface ISuggestion {
  id: string;
  title: string;
}

interface IDropdownInputProps extends IInputBaseProps {
  withCounter?: boolean;
  leftIcon?: TIconName;
  rightIcon?: TIconName;
  value?: string | number;
  onChange?: (value: string) => void;
}

interface IDropdownProps<T = ISuggestion> {
  value?: string;
  onChange(value: string): void;
  placeholder?: string;
  label?: string;
  inputProps?: IDropdownInputProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  suggestions: T[];
  extractTitle?: (item: T) => string;
  extractId?: (item: T) => string;
  className?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  withCounter?: boolean;
  leftIcon?: TIconName;
  rightIcon?: TIconName;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement & HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement & HTMLTextAreaElement>,
  ) => void;
  readOnly?: boolean;
  onLeftIconClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
  onRightIconClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

const FRefOutputComp2 = React.forwardRef(function Dropdown<T>(
  {
    value,
    onChange,
    placeholder,
    label,
    inputProps,
    className,
    name,
    required,
    disabled,
    suggestions,
    extractTitle,
    extractId,
    error,
    withCounter,
    leftIcon,
    rightIcon,
    onFocus,
    onBlur,
    readOnly,
    onLeftIconClick,
    onRightIconClick,
    ...other
  }: IDropdownProps<T>,
  ref,
): React.ReactElement | null {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [content, setContent] = useState('');

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
    () => (withCounter && content.length > 0 ? content.length : 0),
    [content, withCounter],
  );

  const theme = useTheme();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const _extractTitle = useMemo(
    () =>
      extractTitle ||
      (((it: ISuggestion) => it.title) as any as (it: T) => string),
    [extractTitle],
  );
  const _extractId = useMemo(
    () =>
      extractId || (((it: ISuggestion) => it.id) as any as (it: T) => string),
    [extractId],
  );

  useEffect(() => {
    if (value) {
      const suggest = suggestions.find((it) => _extractId(it) === value);
      if (suggest) {
        setContent(_extractTitle(suggest));
      }
    } else {
      setContent('');
    }
  }, [suggestions]);

  useEffect(() => {
    if (value) {
      const suggest = suggestions.find((it) => _extractId(it) === value);
      if (suggest) {
        setContent(_extractTitle(suggest));
      }
    } else {
      setContent('');
    }
  }, [value]);

  const onChooseSuggestionHandler = (suggestion: any) => {
    onChange(_extractTitle(suggestion) || suggestion);
    setContent(_extractTitle(suggestion) || suggestion);
    setShowSuggestions(false);
  };

  const showSuggestionsHandler = () => {
    if (disabled) {
      return;
    }
    setShowSuggestions((prev) => !prev);
  };

  return (
    <DropdownContainer className={className}>
      <GenericInput
        placeholder={placeholder}
        label={label}
        error={error}
        leftIcon={leftIcon}
        rightIcon="chevronDown"
        charsCount={charsCount}
        disabled={disabled}
        onLeftIconClick={onLeftIconClick}
        onRightIconClick={showSuggestionsHandler}
        required={required}
        className={className}
        onClick={() => !disabled && setIsFocused(true)}
        onMouseDown={(e) => e.preventDefault()}
        isFocused={isFocused}
        isLabelOrPlaceholderActivated={isFocused || !!content}
      >
        <StyledInput
          ref={inputRef}
          value={content}
          // onChange={onChangeInputHandler}
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
      {showSuggestions && (
        <ClickAwayListener
          onClickAway={() => setShowSuggestions(false)}
          mouseEvent="click"
        >
          <SuggestionsContainer theme={theme}>
            {suggestions.map((item, index) => (
              <Suggestion
                theme={theme}
                key={index}
                onClick={() => onChooseSuggestionHandler(item)}
              >
                {typeof item === 'string' ? item : _extractTitle(item)}
              </Suggestion>
            ))}
          </SuggestionsContainer>
        </ClickAwayListener>
      )}
    </DropdownContainer>
  );
});

const Dropdown = <T,>({
  myRef,
  ...rest
}: IDropdownProps<T> & { myRef?: React.Ref<HTMLDivElement> }) => (
  <FRefOutputComp2 {...rest} ref={myRef} />
);

export { Dropdown };
export type { IDropdownProps, ISuggestion };
