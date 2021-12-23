/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import classNames from 'classnames';
import { FC, HTMLInputTypeAttribute } from 'react';

interface TextInputProps {
  className?: string;
  wrapperClassName?: string;
  autoFocus?: boolean;
  name?: string;
  value: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  error?: string;
  onChange: (value: string) => void;
}

const TextInput: FC<TextInputProps> = ({
  className,
  wrapperClassName,
  autoFocus,
  name,
  error,
  value,
  type = 'text',
  placeholder,
  maxLength,
  disabled,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={classNames('flex flex-col', wrapperClassName)}>
      <input
        className={classNames(
          'transition-[border-color] duration-200 ease-in-out p-[10px] h-10 rounded-[3px] outline-none bg-deprecated-text-input-bg border border-deprecated-text-input-border hover:border-deprecated-text-input-border-hover text-normal focus:border-link',
          {
            'border-deprecated-text-input-border-disabled': disabled,
          },
          {
            '!border-danger': error,
          },
          className
        )}
        autoFocus={autoFocus}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        onChange={handleChange}
      />
      {error && <div className='mt-1 text-danger'>{error}</div>}
    </div>
  );
};

export default TextInput;
