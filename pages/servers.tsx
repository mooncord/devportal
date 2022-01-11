/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import DefaultLayout from "../layouts/DefaultLayout";
import type { DevPortalPage } from "../util/page";

const ServerInsights: DevPortalPage = () => {
	return null;
};

ServerInsights.getLayout = page => (
	<DefaultLayout
		title="Server Insights"
		description="Here are the servers you have permission to view Server Insights for. Click on any of them to view insightful analytics about your communities, like how engaged your members are and how fast you're growing."
	>
		{page}
	</DefaultLayout>
);

export function getStaticProps() {
	return {
		props: {
			title: "My Servers",
		},
	};
}

export default ServerInsights;
