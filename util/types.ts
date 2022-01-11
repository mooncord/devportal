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

export interface Application {
	id: string;
	name: string;
	icon: string;
	description: string;
	summary: string;
	type?: any;
	hook: boolean;
	bot_public: boolean;
	bot_require_code_grant: boolean;
	verify_key: string;
	owner: Owner;
	flags: number;
	secret: string;
	redirect_uris: string[];
	rpc_application_state: number;
	store_application_state: number;
	verification_state: number;
	interactions_endpoint_url?: any;
	integration_public: boolean;
	integration_require_code_grant: boolean;
	discoverable: boolean;
	bot: Bot;
}

interface Bot {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	public_flags: number;
	bot: boolean;
	token: string;
}

interface Owner {
	id: string;
	username: string;
	avatar?: any;
	discriminator: string;
	public_flags: number;
	flags: number;
}
