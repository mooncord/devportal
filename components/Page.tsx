/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import { FC } from 'react';

interface PageSectionProps {
  className?: string;
}

export const PageSection: FC<PageSectionProps> = ({ className, ...props }) => {
  return <section className={['mb-10', className].join(' ')} {...props} />;
};

export const PageHeading: FC = ({ children }) => {
  return (
    <h2 className='text-2xl font-semibold mb-4 text-header-primary'>
      {children}
    </h2>
  );
};

export const PageSubheading: FC = ({ children }) => {
  return (
    <p className='text-xl font-normal mb-5 text-header-secondary'>{children}</p>
  );
};

interface PageSectionHeadingProps {
  className?: string;
}

export const PageSectionHeading: FC<PageSectionHeadingProps> = ({
  className,
  children,
}) => {
  return (
    <h3
      className={[
        className,
        'text-xl font-medium mb-2 text-header-primary',
      ].join(' ')}
    >
      {children}
    </h3>
  );
};

export const PageSectionSubheading: FC = ({ children }) => {
  return (
    <p className='text-base font-normal mb-5 text-header-secondary'>
      {children}
    </p>
  );
};
