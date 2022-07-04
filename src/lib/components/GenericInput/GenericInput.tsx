import React, { useCallback, useEffect, useRef, useState } from 'react';

import type { ITheme } from '../../theme';
import { withTheme } from '../../theme';
import { ErrorHint } from '../ErrorHint';
import type { IconNames } from '../Icon';
import { Icon } from '../Icon';
import {
  Content,
  CounterContainer,
  ErrorLabel,
  InputContainer,
  Label,
  LeftIconContainer,
  Placeholder,
  Required,
  RightIconContainer,
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
  leftIcon?: IconNames;
  rightIcon?: IconNames;
  charsCount?: number;
  isFocused?: boolean;
  isLabelOrPlaceholderActivated?: boolean;
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement>) => void;
  height?: 'min' | 'max';
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
  height = 'min',
  ...other
}) => {
  const inputContainerRef = useRef(null);
  const [isErrorIconShow, setIsErrorIconShow] = useState(false);

  useEffect(() => {
    const elementWidth = inputContainerRef.current?.clientWidth;
    setIsErrorIconShow(error && elementWidth / 8 < error?.length);
  }, [error, inputContainerRef.current?.clientWidth]);

  const getIconCursor = useCallback(
    (isClickable: boolean) => {
      if (disabled) {
        return 'default';
      } else if (isClickable) {
        return 'pointer';
      } else {
        return 'text';
      }
    },
    [disabled],
  );

  const onClickLeftIconHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (onLeftIconClick) {
        e.stopPropagation();
        onLeftIconClick(e);
      }
    },
    [onLeftIconClick],
  );

  const onClickRightIconHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (onRightIconClick) {
        e.stopPropagation();
        onRightIconClick(e);
      }
    },
    [onRightIconClick],
  );

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
      height={height}
      {...other}
    >
      {leftIcon && (
        <LeftIconContainer
          onClick={onClickLeftIconHandler}
          cursor={getIconCursor(!!onLeftIconClick)}
        >
          <Icon
            name={leftIcon}
            size="large"
            color={disabled ? theme.colors.gray : theme.colors.dark_gray}
          />
        </LeftIconContainer>
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
        <RightIconContainer
          cursor={getIconCursor(!!onRightIconClick)}
          onClick={onClickRightIconHandler}
        >
          <Icon
            name={rightIcon}
            size="medium"
            color={disabled ? theme.colors.gray : theme.colors.dark_gray}
          />
        </RightIconContainer>
      )}
    </InputContainer>
  );
};

const GenericInputWithTheme = withTheme(GenericInput);

export { GenericInputWithTheme as GenericInput };
export type { IInputBaseProps, IGenericInputProps };
