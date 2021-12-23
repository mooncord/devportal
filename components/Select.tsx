/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import { FC, Fragment, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import classNames from 'classnames';
import Icon from './Icon';

interface SelectOption {
  label: string;
  value: string;
  children?: ReactNode;
}

interface SelectProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
}

const Select: FC<SelectProps> = ({
  children,
  className,
  value,
  onChange,
  options,
}) => {
  const currentValue = options.find((option) => option.value === value);

  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          {children && (
            <Listbox.Label className='mr-4 font-medium text-header-primary'>
              {children}
            </Listbox.Label>
          )}
          <div className='relative'>
            <Listbox.Button
              className={classNames(
                'grid grid-cols-1-auto items-center p-2 pl-3 rounded w-full border bg-secondary border-tertiary text-normal',
                className,
                {
                  'rounded-b-none border-b-transparent': open,
                }
              )}
            >
              <span className='flex gap-2 items-center'>
                {currentValue?.children}
                {currentValue?.label}
              </span>
              <Icon
                className={classNames('w-6', {
                  'rotate-180': open,
                })}
                icon='chevron'
              />
            </Listbox.Button>
            <Listbox.Options className='absolute z-10 rounded-b border bg-secondary border-tertiary w-full'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  as={Fragment}
                >
                  {({ selected }) => (
                    <li
                      className={classNames(
                        'grid grid-cols-1-auto items-center p-3 cursor-pointer text-interactive-normal hover:text-interactive-hover',
                        {
                          'bg-tertiary text-interactive-active': selected,
                        },
                        {
                          'hover:bg-secondary-alt': !selected,
                        }
                      )}
                    >
                      <span className='flex gap-2 items-center'>
                        {option.children}
                        {option.label}
                      </span>
                      {selected && (
                        <Icon className='w-5 text-brand-500' icon='selected' />
                      )}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Select;
