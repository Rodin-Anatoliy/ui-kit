import { cx } from '@linaria/core';
import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

interface IContentProps {
  value?: string;
  label?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  withCounter?: boolean;
  withoutLabel?: boolean;
  startIcon?: string;
  endIcon?: string;
  disabled?: boolean;
  required: boolean;
  onIconClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
  error?: string;
}

const Content: React.FC<IContentProps> = ({
  value,
  placeholder,
  label = '',
  width,
  height,
  startIcon,
  endIcon,
  withCounter,
  withoutLabel,
  disabled,
  onIconClick,
  required,
  error,
}) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(value);
  }, [value]);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, []);

  return (
    <div className="container">
      {startIcon && <div className="iconContainer" onClick={onIconClick} />}

      <div
        className={cx('content', disabled && 'disabledStyles')}
        onClick={onIconClick}
      >
        {content}
      </div>

      <span className={cx('label', content && 'trans')}>
        {required && <span className="required">* </span>}
        {label}
      </span>
      {endIcon && <div className="iconContainer" onClick={onIconClick} />}
      {error && <label className="errorLabel">{error}</label>}
    </div>
  );
};

export { Content };
export type { IContentProps };
