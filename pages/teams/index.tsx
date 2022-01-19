/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import CardGridContainer from '../../components/CardGrid';
import TeamGrid from '../../components/TeamGrid';
import DefaultLayout from '../../layouts/DefaultLayout';
import type { DevPortalPage } from '../../util/page';

const Teams: DevPortalPage = () => {
  return (
    <CardGridContainer>
      <TeamGrid
        heading='My Teams'
        teams={[
          {
            id: '847374732063932438',
            name: 'Testing',
            icon: 'ac8697c1a1a909cae6bde2cbd47f438a',
          },
        ]}
      />
    </CardGridContainer>
  );
};

Teams.getLayout = (page) => (
  <DefaultLayout
    title='Teams'
    description='Teams are an important part of life. In some cases, teams shoot touchdowns and kick free throws. In Discord, teams create and manage apps. Here, you can create a team, add team members, and manage their roles. You can even give your team a cool icon. Express yourself, ya know?'
  >
    {page}
  </DefaultLayout>
);

export function getStaticProps() {
  return {
    props: {
      title: 'My Teams',
    },
  };
}

export default Teams;
