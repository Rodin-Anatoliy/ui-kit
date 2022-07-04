import { ErrorHint } from 'components/ErrorHint/index';
import type { TIconName } from 'components/Icon/Icon';
import { Icon } from 'components/Icon/Icon';
import React, { useEffect, useRef, useState } from 'react';
import type { ITheme } from 'theme';
import { withTheme } from 'theme';

import {
  Content,
  CounterContainer,
  ErrorLabel,
  InputContainer,
  Label,
  Placeholder,
  Required,
} from './GenericInput.styles';

interface IInputBaseProps {
  label?: string;
  error?: string;
  placeholder?: string;
  onLeftIconClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
  onRightIconClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
  theme: ITheme;
}

interface IGenericInputProps extends IInputBaseProps {
  leftIcon?: TIconName;
  rightIcon?: TIconName;
  charsCount?: number;
  isFocused?: boolean;
  isLabelOrPlaceholderActivated?: boolean;
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const GenericInput: React.FC<
  IGenericInputProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({
  placeholder,
  label = '',
  isLabelOrPlaceholderActivated,
  isFocused,
  onClick,
  error,
  leftIcon,
  rightIcon,
  charsCount,
  disabled,
  onLeftIconClick,
  onRightIconClick,
  onMouseDown,
  required,
  className,
  theme,
  children,
}) => {
  const inputContainerRef = useRef(null);
  const [isErrorIconShow, setIsErrorIconShow] = useState(false);

  useEffect(() => {
    const elementWidth = inputContainerRef.current?.clientWidth;
    setIsErrorIconShow(error && elementWidth / 8 < error?.length);
  }, [error, inputContainerRef.current?.clientWidth]);

  return (
    <InputContainer
      className={className}
      ref={inputContainerRef}
      theme={theme}
      disabled={disabled}
      error={error}
      onClick={onClick}
      isFocused={isFocused}
      onMouseDown={onMouseDown}
    >
      {leftIcon && (
        <Icon
          name={leftIcon}
          size="large"
          color={disabled ? theme.colors.gray : theme.colors.dark_gray}
          style={{
            cursor: disabled
              ? 'default'
              : (!onLeftIconClick
              ? 'text'
              : 'pointer'),
            marginRight: '1rem',
          }}
          onClick={(e) => {
            if (onLeftIconClick) {
              e.stopPropagation();
              onLeftIconClick(e);
            }
          }}
        />
      )}

      {!placeholder && (
        <>
          <Label
            error={error}
            disabled={disabled}
            isLeftIcon={!!leftIcon}
            isRightIcon={!!rightIcon}
            theme={theme}
            isLabelUpped={isLabelOrPlaceholderActivated}
          >
            {required && <Required theme={theme}>* </Required>}
            {label}
            {charsCount > 0 && (
              <CounterContainer theme={theme}> {charsCount}</CounterContainer>
            )}
          </Label>
        </>
      )}

      <Content>
        {!isLabelOrPlaceholderActivated && placeholder && (
          <Placeholder disabled={disabled} theme={theme}>
            {placeholder}
          </Placeholder>
        )}
        {children}
      </Content>

      {error &&
        (isErrorIconShow ? (
          <ErrorHint text={error} />
        ) : (
          <ErrorLabel theme={theme}>{error}</ErrorLabel>
        ))}

      {!isErrorIconShow && rightIcon && (
        <Icon
          name={rightIcon}
          size="large"
          color={disabled ? theme.colors.gray : theme.colors.dark_gray}
          style={{
            cursor: disabled
              ? 'default'
              : (!onRightIconClick
              ? 'text'
              : 'pointer'),
            marginLeft: '1rem',
          }}
          onClick={(e) => {
            if (onRightIconClick) {
              e.stopPropagation();
              onRightIconClick(e);
            }
          }}
        />
      )}
    </InputContainer>
  );
};

const GenericInputWithTheme = withTheme(GenericInput);

export { GenericInputWithTheme as GenericInput };
export type { IInputBaseProps, IGenericInputProps };
