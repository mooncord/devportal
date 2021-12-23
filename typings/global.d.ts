/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import type { ReactElement } from 'react';

declare module '*.svg' {
  const content: ReactElement;
  export default content;
}
