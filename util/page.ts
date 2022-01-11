/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import type { NextPage } from "next";
import type { NextRouter } from "next/router";
import type { ReactElement, ReactNode } from "react";

export type DevPortalPage = NextPage & {
	getLayout?: (
		page: ReactElement,
		router: NextRouter,
		pageProps: any,
	) => ReactNode;
};
