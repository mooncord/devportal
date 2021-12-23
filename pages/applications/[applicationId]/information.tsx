/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import { useState } from 'react';
import AvatarUploader from '../../../components/AvatarUploader';
import Button from '../../../components/Button';
import Divider from '../../../components/Divider';
import { FormLabel } from '../../../components/Form';
import TextArea from '../../../components/TextArea';
import TextInput from '../../../components/TextInput';
import ApplicationLayout from '../../../layouts/ApplicationLayout';

import type { DevPortalPage } from '../../../util/types';

const ApplicationInformation: DevPortalPage = () => {
  const [name, setName] = useState('Testing');
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic?'
  );
  const [tags, setTags] = useState(['tag1', 'tag2']);
  const [interactionsViaHTTP, setInteractionsViaHTTP] = useState(false);
  const [interactionsEndpoint, setInteractionsEndpoint] = useState(
    'https://example.com/interactions'
  );

  return (
    <form className='max-w-4xl'>
      <section>
        <div className='flex'>
          <div className='flex flex-wrap gap-12 flex-auto max-w-[450px]'>
            <AvatarUploader
              fieldName='icon'
              avatar='https://cdn.discordapp.com/app-icons/847374886854197279/ac8697c1a1a909cae6bde2cbd47f438a.png?size=256'
              onChange={() => {}}
              hint='Change Icon'
            />
            <div className='max-w-[270px]'>
              <p className='mb-2 text-sm cursor-default text-header-secondary'>
                We recommend an image of at least 512x512 for the application
                icon.
              </p>
              <Button className='mt-2' color='primary' look='outlined'>
                Upload Image
              </Button>
            </div>
          </div>
          <div className='flex-1/2'>
            <FormLabel
              htmlFor='name'
              description='Your application name will appear when users authorize your application via OAuth2.'
            >
              Name
            </FormLabel>
            <TextInput name='name' value={name} onChange={setName} />
          </div>
        </div>
      </section>
      <Divider />
      <section>
        <FormLabel
          htmlFor='description'
          description="Your description will appear in the About Me section of your bot's profile."
        >
          Description (maximum 400 characters)
        </FormLabel>
        <TextArea
          name='description'
          value={description}
          onChange={setDescription}
          maxLength={400}
        />
      </section>
      <Divider />
      <section>
        <FormLabel description='Add up to 5 tags to describe the content and functionality of your application.'>
          Tags (maximum 5)
        </FormLabel>
        <TextInput
          value={tags.join(', ')}
          onChange={(value) => setTags(value.split(', '))}
        />
      </section>
      <Divider />
      <section>
        <div className='flex'>
          <FormLabel description='If you want to receive interactions via HTTP POSTs rather than over Gateway with a bot user, enable this and set an endpoint below.'>
            Receive interactions via HTTP
          </FormLabel>
          <input
            checked={interactionsViaHTTP}
            onChange={(event) => setInteractionsViaHTTP(event.target.checked)}
            className='ml-8'
            type='checkbox'
          />
        </div>
        {interactionsViaHTTP && (
          <div>
            {/* Do we even need a label here or is it already covered by the above? */}
            {/*
            <FormLabel
              htmlFor='interactionsEndpoint'
              description='An endpoint where the HTTP POSTs should be sent to. This endpoint need to pass signature verification before you can save it.'
            >
              Interactions Endpoint URL
            </FormLabel> */}
            <div className='flex gap-12 items-start justify-between'>
              <TextInput
                name='interactionsEndpoint'
                wrapperClassName='w-full'
                value={interactionsEndpoint}
                error='Invalid URL'
                placeholder='https://nice-example.local/api/interactions'
                onChange={setInteractionsEndpoint}
              />
              <Button>Test</Button>
            </div>
          </div>
        )}
      </section>
      <Divider />
      <section className='flex gap-20 justify-between'>
        <div className='flex-1/2'>
          <FormLabel description="A link to your application's Terms of Service">
            Terms of Service URL
          </FormLabel>
          <TextInput
            value=''
            placeholder='https://my-cool-app.com/terms-of-service'
            onChange={(value) => setTags(value.split(','))}
          />
        </div>
        <div className='flex-1/2'>
          <FormLabel description="A link to your application's Privacy Policy">
            Privacy Policy URL
          </FormLabel>
          <TextInput
            value=''
            placeholder='https://my-cool-app.com/privacy-policy'
            onChange={(value) => setTags(value.split(','))}
          />
        </div>
      </section>
    </form>
  );
};

ApplicationInformation.getLayout = (page, router) => (
  <ApplicationLayout
    title='General Information'
    description='What should we call your creation? What amazing things does it do? What icon should represent it across Discord? Tell us here!'
    docLink={{
      label:
        'By creating an API application, you agree to the Discord API Terms of Service',
      href: '/docs/legal',
    }}
  >
    {page}
  </ApplicationLayout>
);

export function getServerSideProps() {
  return {
    props: {
      title: 'My Applications',
    },
  };
}

export default ApplicationInformation;
