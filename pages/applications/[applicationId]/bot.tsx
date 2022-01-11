/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import Button from "../../../components/Button";
import {
	PageSection,
	PageSectionHeading,
	PageSectionSubheading,
} from "../../../components/Page";
import ApplicationLayout from "../../../layouts/ApplicationLayout";
import type { DevPortalPage } from "../../../util/types";

const ApplicationInformation: DevPortalPage = () => {
	return (
		<PageSection>
			<div className="flex items-center justify-between">
				<div>
					<PageSectionHeading>Build-A-Bot</PageSectionHeading>
					<PageSectionSubheading>
						Bring your app to life by adding a bot user. This action
						is irreversible (because robots are too cool to
						destroy).
					</PageSectionSubheading>
				</div>
				<Button>Add Bot</Button>
			</div>
		</PageSection>
	);
};

ApplicationInformation.getLayout = (page, router) => (
	<ApplicationLayout
		title="Bot"
		description="Bring your app to life on Discord with a Bot user. Be a part of chat in your users' servers and interact with them directly."
		docLink={{
			label: "Learn more about bot users",
			href: "/docs/topics/oauth2#bots",
		}}
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

export default ApplicationInformation;
