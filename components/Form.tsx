/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import classNames from 'classnames';
import { FC, ReactNode } from 'react';

interface FormLabelProps {
  className?: string;
  children: ReactNode;
  description?: string;
  htmlFor?: string;
}

export const FormLabel: FC<FormLabelProps> = ({
  className,
  children,
  description,
  htmlFor,
}) => {
  return (
    <div>
      <label
        className={classNames(
          'block uppercase text-xs font-semibold leading-4 text-header-secondary',
          { 'mb-2': htmlFor },
          className
        )}
        htmlFor={htmlFor}
      >
        {children}
      </label>
      {description && (
        <p className='text-sm font-normal leading-5 mb-5 text-header-secondary'>
          {description}
        </p>
      )}
    </div>
  );
};
