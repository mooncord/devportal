/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import ApplicationLayout from "../../../layouts/ApplicationLayout";
import type { DevPortalPage } from "../../../util/types";

const ApplicationEmbedded: DevPortalPage = () => {
	return null;
};

ApplicationEmbedded.getLayout = (page, router) => (
	<ApplicationLayout
		title="Embedded Application Settings"
		description="A place for you to mess with your embedded application settings"
	>
		{page}
	</ApplicationLayout>
);

export function getServerSideProps() {
	return {
		props: {
			title: "My Applications",
		},
	};
}

export default ApplicationEmbedded;
