/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import type { AppProps } from 'next/app';
import type { DevPortalPage } from '../util/types';

import Head from 'next/head';
import { useRouter } from 'next/router';

import '../styles/globals.css';

type DevPortalAppProps = AppProps & {
  Component: DevPortalPage;
};

function DevPortalApp({ Component, pageProps }: DevPortalAppProps) {
  const title = `Discord Developer Portal ${
    pageProps.title ? ' — ' + pageProps.title : ''
  }`;
  const description =
    pageProps.description ||
    "Integrate your service with Discord — whether it's a bot or a game or whatever your wildest imagination can come up with.";
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
      </Head>
      {getLayout(<Component {...pageProps} />, router, pageProps)}
    </>
  );
}

export default DevPortalApp;
