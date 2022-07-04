import type { Ref } from 'react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useTheme } from '../../theme';
import type { IInputBaseProps } from '../GenericInput';
import { GenericInput } from '../GenericInput';
import { IconNames } from '../Icon/Icon';
import {
  DropdownContainer,
  DropdownContent,
  DropdownContentContainer,
  StyledInput,
  Suggestion,
  SuggestionsContainer,
} from './Input.styles';

interface IDropdownInputProps<T>
  extends Omit<IInputBaseProps, 'theme'>,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'onChange' | 'value' | 'readOnly'
    > {
  leftIcon?: IconNames;
  value?: string;
  onChange?: (value: string) => void;
  suggestions: T[];
  getLabel: (item: T) => string;
  getValue: (item: T) => string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  isSearchable?: boolean;
}

const CustomDropdownInput = React.forwardRef(function Dropdown<T>(
  {
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    label = '',
    error,
    leftIcon,
    disabled,
    onLeftIconClick,
    onRightIconClick,
    required,
    className,
    suggestions,
    getLabel,
    getValue,
    isSearchable,
    ...other
  }: IDropdownInputProps<T>,
  ref: Ref<HTMLInputElement>,
): React.ReactElement | null {
  const theme = useTheme();
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isSuggestionsShow, setIsSuggestionsShow] = useState(false);
  const [content, setContent] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] =
    useState<number>(0);

  const filteredSuggestions = useMemo(
    () => suggestions.filter((item) => getLabel(item).includes(inputValue)),
    [inputValue, suggestions, getLabel],
  );

  const suggestionRefs = useMemo(
    () =>
      filteredSuggestions.reduce((acc, _, index) => {
        acc[index] = React.createRef();
        return acc;
      }, {}),
    [filteredSuggestions],
  );

  const dropdownIcon = useMemo(() => {
    if (content) {
      return IconNames.cross;
    } else if (isSuggestionsShow) {
      return IconNames.chevronUp;
    } else {
      return IconNames.chevronDown;
    }
  }, [content, isSuggestionsShow]);

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

  const onChangeInputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      if (isSearchable) {
        !isSuggestionsShow && setIsSuggestionsShow(true);
        setInputValue(e.target.value.trimStart());
      }
    },
    [isSearchable, isSuggestionsShow],
  );

  const onChooseSuggestionHandler = useCallback(
    (suggestion: T) => {
      onChange(getValue(suggestion));
      setInputValue('');
      setIsSuggestionsShow(false);
    },
    [onChange, getValue],
  );

  const onKeyDownDropdownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (isFocused) {
        const isArrowUp = e.key === 'ArrowUp';
        const isArrowDown = e.key === 'ArrowDown';
        const isEnter = e.key === 'Enter';
        const isEscape = e.key === 'Escape';

        if (isEscape) {
          setIsSuggestionsShow(false);
        } else if (isArrowUp || isArrowDown) {
          e.preventDefault();
          if (!isSuggestionsShow) {
            setIsSuggestionsShow(true);
          } else {
            isArrowDown &&
              setSelectedSuggestionIndex((prev) =>
                prev < filteredSuggestions.length - 1 ? prev + 1 : 0,
              );
            isArrowUp &&
              setSelectedSuggestionIndex((prev) =>
                prev > 0 ? prev - 1 : filteredSuggestions.length - 1,
              );
          }
        } else if (isEnter && isSuggestionsShow) {
          const suggest = filteredSuggestions[selectedSuggestionIndex];
          suggest && onChooseSuggestionHandler(suggest);
        }
      }
    },
    [
      isFocused,
      filteredSuggestions,
      selectedSuggestionIndex,
      isSuggestionsShow,
      onChooseSuggestionHandler,
    ],
  );

  const onRightIconClickHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!disabled) {
        switch (dropdownIcon) {
          case IconNames.cross:
            onChange('');
            setIsSuggestionsShow(false);
            break;
          case IconNames.chevronUp:
            setIsSuggestionsShow(false);
            break;
          case IconNames.chevronDown:
            setIsFocused(true);
            setIsSuggestionsShow(true);
            break;
        }
      }
      onRightIconClick && onRightIconClick(e);
    },
    [disabled, dropdownIcon, onRightIconClick, onChange],
  );

  useEffect(() => {
    if (isFocused) {
      inputRef?.current?.focus();
    } else {
      inputRef?.current?.blur();
    }
  }, [isFocused]);

  useEffect(() => {
    const suggest = suggestions.find((item) => getValue(item) === value);
    if (suggest) {
      setContent(getLabel(suggest));
    } else {
      setContent('');
    }
  }, [value, suggestions, getValue, getLabel]);

  useEffect(() => {
    if (!isFocused && inputValue) {
      setInputValue('');
    }
  }, [isFocused, inputValue]);

  useEffect(() => {
    suggestionRefs[selectedSuggestionIndex]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }, [selectedSuggestionIndex, suggestionRefs]);

  useEffect(() => {
    if (!isFocused) {
      setIsSuggestionsShow(false);
    }
  }, [isFocused]);

  useEffect(() => {
    setSelectedSuggestionIndex(0);
  }, [filteredSuggestions]);

  return (
    <DropdownContainer
      onKeyDown={onKeyDownDropdownHandler}
      onMouseDown={(e) => e.preventDefault()}
    >
      <GenericInput
        placeholder={placeholder}
        label={label}
        error={error}
        leftIcon={leftIcon}
        rightIcon={dropdownIcon}
        disabled={disabled}
        onLeftIconClick={onLeftIconClick}
        onRightIconClick={onRightIconClickHandler}
        required={required}
        className={className}
        onClick={() => {
          if (!disabled) {
            setIsSuggestionsShow((prev) => !prev);
            setIsFocused(true);
          }
        }}
        isFocused={isFocused}
        isLabelOrPlaceholderActivated={!!content || (isSearchable && isFocused)}
        style={{
          borderRadius:
            isSuggestionsShow && filteredSuggestions.length > 0
              ? '0.75rem 0.75rem 0.25rem 0.25rem'
              : '0.75rem',
        }}
      >
        <DropdownContentContainer>
          <StyledInput
            ref={inputRef}
            value={inputValue}
            onFocus={onFocusInputHandler}
            onBlur={onBlurInputHandler}
            onChange={onChangeInputHandler}
            type="text"
            disabled={disabled}
            readOnly={!isSearchable}
            required={required}
            theme={theme}
            {...other}
          />
          {!inputValue && <DropdownContent>{content}</DropdownContent>}
        </DropdownContentContainer>
      </GenericInput>

      {isSuggestionsShow && (
        <SuggestionsContainer theme={theme}>
          {filteredSuggestions.map((item, index) => (
            <Suggestion
              theme={theme}
              key={index}
              ref={suggestionRefs[index]}
              isSelected={
                selectedSuggestionIndex >= 0 &&
                index === selectedSuggestionIndex
              }
              onMouseEnter={() => {
                setSelectedSuggestionIndex(index);
              }}
              onClick={() => {
                onChooseSuggestionHandler(item);
              }}
            >
              {getLabel(item)}
            </Suggestion>
          ))}
        </SuggestionsContainer>
      )}
    </DropdownContainer>
  );
});

CustomDropdownInput.displayName = 'DropdownInput';

const DropdownInput = <T,>({
  myRef,
  ...rest
}: IDropdownInputProps<T> & {
  myRef?: React.Ref<HTMLInputElement>;
}) => <CustomDropdownInput {...rest} ref={myRef} />;

export { DropdownInput };
export type { IDropdownInputProps };
