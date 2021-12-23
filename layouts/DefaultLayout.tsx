/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import { FC, ReactNode } from 'react';
import { PageHeading, PageSection, PageSubheading } from '../components/Page';
import Sidebar, { SidebarSectionProps } from '../components/Sidebar';

interface DefaultLayoutProps {
  title: string;
  description: string;
  headingChildren?: ReactNode;
  sidebarSections?: SidebarSectionProps[];
}

const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  title,
  description,
  headingChildren,
  sidebarSections = [],
}) => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar>
        {[
          {
            items: [
              {
                href: '/applications',
                icon: 'application',
                label: 'Applications',
              },
              {
                href: '/teams',
                icon: 'people',
                label: 'Teams',
              },
              {
                href: '/servers',
                icon: 'network',
                label: 'Server Insights',
              },
              {
                href: '/documentation',
                icon: 'documentation',
                label: 'Documentation',
              },
            ],
          },
          ...sidebarSections,
        ]}
      </Sidebar>
      <main className='flex justify-center w-full max-h-screen overflow-y-auto bg-primary'>
        <div className='flex-auto p-10 w-full max-w-[1440px]'>
          <PageSection>
            <PageHeading>{title}</PageHeading>
            <PageSubheading>{description}</PageSubheading>
            {headingChildren}
          </PageSection>
          <PageSection>{children}</PageSection>
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
