import type { FC } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Icon, IconNames } from '../../Icon';
import * as Styled from './styles';

export interface ISelectInputProps {
  values: Array<{ value: string; label: string }>;
  value: string;
  prefix?: string;
  onChange: (value: string) => void;
}

export const SelectInput: FC<ISelectInputProps> = ({
  values,
  value,
  prefix,
  onChange,
}) => {
  const [isShown, setShow] = useState(false);

  const label = useMemo(() => {
    const findValue = values.find((val) => val.value === value)?.label;
    return findValue ? findValue : values[0].label;
  }, [value, values]);

  const onBlurHandler = useCallback(() => {
    setShow(false);
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', onBlurHandler);
    return () => {
      document.body.removeEventListener('click', onBlurHandler);
    };
  }, [onBlurHandler]);

  return (
    <Styled.SelectInputContainer isShown={isShown}>
      <Styled.SelectInputValue onFocus={() => setShow(true)}>
        {prefix} {label}
      </Styled.SelectInputValue>
      <Styled.SelectInputDelimiter />
      <Styled.SelectInputIcon
        onClick={(e) => {
          e.stopPropagation();
          setShow(!isShown);
        }}
      >
        <Icon name={IconNames.triangleDown} size="small" color="#6F6F6F" />
      </Styled.SelectInputIcon>
      {isShown ? (
        <Styled.SelectInputOptionContainer>
          {values.map((val) => (
            <Styled.SelectInputOption
              onClick={() => {
                onChange(val.value);
                setShow(!isShown);
              }}
              key={val.value}
            >
              {val.label}
            </Styled.SelectInputOption>
          ))}
        </Styled.SelectInputOptionContainer>
      ) : undefined}
    </Styled.SelectInputContainer>
  );
};
