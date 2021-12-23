/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classNames from 'classnames';

import Icon from './Icon';

import type { UrlObject } from 'url';

interface SidebarItemProps {
  href: string | UrlObject;
  icon: string;
  label: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ href, icon, label }) => {
  const router = useRouter();
  const isActive =
    typeof href === 'string'
      ? href === router.pathname
      : href.pathname === router.pathname;

  return (
    <li className='mb-2'>
      <Link href={href}>
        <a
          className={classNames(
            'flex items-center justify-start gap-3 p-2 rounded font-normal text-interactive-normal',
            {
              'bg-brand-500 !text-white dark:text-interactive-active': isActive,
            },
            {
              'hover:text-interactive-hover': !isActive,
            }
          )}
        >
          <Icon className='w-6 h-6' icon={icon} />
          {label}
        </a>
      </Link>
    </li>
  );
};

export interface SidebarSectionProps {
  title?: string;
  items?: SidebarItemProps[];
  children?: ReactNode;
}

const SidebarSection: FC<SidebarSectionProps> = ({
  title,
  items,
  children,
}) => (
  <div className='mb-6 last:mb-0'>
    {title && (
      <h3 className='text-xs font-semibold mb-2 uppercase text-normal'>
        {title}
      </h3>
    )}
    {children}
    {items && (
      <nav>
        <ul>
          {items.map(({ href, icon, label }) => (
            <SidebarItem key={label} href={href} icon={icon} label={label} />
          ))}
        </ul>
      </nav>
    )}
  </div>
);

interface SidebarProps {
  children: SidebarSectionProps[];
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <aside className='flex-shrink-0 w-[350px] min-h-full max-h-screen overflow-y-auto p-8 bg-secondary'>
      <SidebarSection>
        <Link href='/applications'>
          <a className='flex items-center text-logo-primary hover:opacity-80'>
            <Icon icon='logo' className='w-6 mr-2' />
            <span className='text-sm uppercase'>Developer Portal</span>
          </a>
        </Link>
      </SidebarSection>
      {children.map((section) => (
        <SidebarSection
          key={section.title || section.items?.length}
          {...section}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
