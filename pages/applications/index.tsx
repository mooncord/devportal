/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import ApplicationGrid from '../../components/ApplicationGrid';
import CardGridContainer from '../../components/CardGrid';
import DefaultLayout from '../../layouts/DefaultLayout';
import type { DevPortalPage } from '../../util/types';

const Applications: DevPortalPage = () => {
  // TODO: Load applications from the API

  return (
    <>
      <CardGridContainer>
        <ApplicationGrid
          heading='My Applications'
          isFlush
          applications={[
            {
              id: '847374886854197279',
              name: 'Discord Previews',
              icon: 'ac8697c1a1a909cae6bde2cbd47f438a',
              description:
                'Automatically checks new client builds for new stuff that has been added.\nDetailed Posts about new features: https://twitter.com/DiscordPreviews',
              summary:
                'Automatically checks new client builds for new stuff that has been added.\nDetailed Posts about new features: https://twitter.com/DiscordPreviews',
              type: null,
              hook: true,
              bot_public: false,
              bot_require_code_grant: false,
              verify_key: 'no',
              owner: {
                id: '847374732063932438',
                username: 'team847374732063932438',
                avatar: null,
                discriminator: '0000',
                public_flags: 1024,
                flags: 1024,
              },
              flags: 0,
              secret: 'no',
              redirect_uris: ['https://discord.previews'],
              rpc_application_state: 0,
              store_application_state: 1,
              verification_state: 1,
              interactions_endpoint_url: null,
              integration_public: false,
              integration_require_code_grant: false,
              discoverable: false,
              bot: {
                id: '847374886854197279',
                username: 'Discord Previews',
                avatar: 'a41c43811be6af32f90eb38d0e7179b5',
                discriminator: '6424',
                public_flags: 0,
                bot: true,
                token: 'no',
              },
            },
          ]}
        />
      </CardGridContainer>
    </>
  );
};

Applications.getLayout = (page) => (
  <DefaultLayout
    title='Applications'
    description="Find the perfect feature set for your game in our Game SDK, and sign up for Server Commerce to start selling directly in your server. Get started by creating a new application. We can't wait to see what you make!"
  >
    {page}
  </DefaultLayout>
);

export function getStaticProps() {
  return {
    props: {
      title: 'My Applications',
    },
  };
}

export default Applications;
