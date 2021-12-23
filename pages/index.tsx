/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import type { DevPortalPage } from '../util/types';

const Index: DevPortalPage = () => {
  return null;
};

export function getStaticProps() {
  return {
    props: {
      title: 'API Docs for Bots and Developers',
    },
  };
}

export default Index;
