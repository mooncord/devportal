/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import classNames from "classnames";
import { FC, useContext } from "react";
import { Application } from "../util/types";
import Card from "./Card";
import { CardGrid, CardGridContext } from "./CardGrid";
import { PageSectionHeading } from "./Page";

interface ApplicationGridProps {
	applications: Application[];
	heading: string;
	isFlush?: boolean;
}

const ApplicationGrid: FC<ApplicationGridProps> = ({
	applications,
	heading,
	isFlush,
}) => {
	const { cardType } = useContext(CardGridContext);

	return (
		<div
			className={classNames({
				"mb-8": !isFlush,
			})}
		>
			<PageSectionHeading className="!mb-6">{heading}</PageSectionHeading>
			<CardGrid>
				{applications.map(application => (
					<Card
						key={application.id}
						imageUri={`https://cdn.discordapp.com/app-icons/${application.id}/${application.icon}.png`}
						type={cardType}
						href={`/applications/${application.id}`}
					>
						{application.name}
					</Card>
				))}
			</CardGrid>
		</div>
	);
};

export default ApplicationGrid;
