/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import classNames from 'classnames';
import { FC, HTMLInputTypeAttribute } from 'react';

interface TextAreaProps {
  autoFocus?: boolean;
  name?: string;
  value: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  error?: string;
  resizeable?: boolean;
  onChange: (value: string) => void;
}

const TextArea: FC<TextAreaProps> = ({
  autoFocus,
  name,
  error,
  value,
  placeholder,
  maxLength,
  disabled,
  resizeable,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='relative flex flex-col'>
      <textarea
        className={classNames(
          'transition-[border-color] duration-200 ease-in-out p-[10px] h-[120px] rounded-[3px] outline-none bg-deprecated-text-input-bg border border-deprecated-text-input-border hover:border-deprecated-text-input-border-hover text-normal focus:border-link',
          {
            'border-deprecated-text-input-border-disabled': disabled,
          },
          {
            '!border-danger': error,
          },
          {
            'resize-none': !resizeable,
          }
        )}
        autoFocus={autoFocus}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        onChange={handleChange}
      />
      {maxLength && (
        <div className='absolute bottom-3 right-[14px] text-xs font-mono pointer-events-none text-muted'>
          {maxLength - value.length}
        </div>
      )}
      {error && <div className='mt-1 text-danger'>{error}</div>}
    </div>
  );
};

export default TextArea;
