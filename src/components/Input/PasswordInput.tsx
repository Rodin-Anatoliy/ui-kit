import type { Ref } from 'react';
import React, { useCallback, useState } from 'react';
import { withTheme } from 'theme';

import type { ITextInputProps } from './TextInput';
import { TextInput } from './TextInput';

const CustomPasswordInput: React.FC<
  ITextInputProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = React.forwardRef(
  (
    { onRightIconClick, ...other },
    ref: Ref<HTMLInputElement & HTMLTextAreaElement>,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const onClickRightIconHandler = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        setIsPasswordVisible((prev) => !prev);
        onRightIconClick && onRightIconClick(e);
      },
      [onRightIconClick],
    );

    return (
      <TextInput
        {...other}
        onRightIconClick={onClickRightIconHandler}
        rightIcon={isPasswordVisible ? 'visible' : 'notVisible'}
        type={isPasswordVisible ? 'text' : 'password'}
        style={{ letterSpacing: isPasswordVisible ? 'normal' : '5px' }}
      />
    );
  },
);

CustomPasswordInput.displayName = 'PasswordInput';

const PasswordInput = withTheme(CustomPasswordInput);

export { PasswordInput };
