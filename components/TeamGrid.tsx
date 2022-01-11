/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import classNames from "classnames";
import { FC, useContext } from "react";
import Card from "./Card";
import { CardGrid, CardGridContext } from "./CardGrid";
import { PageSectionHeading } from "./Page";

interface TeamGridProps {
	teams: any[];
	heading: string;
	isFlush?: boolean;
}

const TeamGrid: FC<TeamGridProps> = ({ teams, heading, isFlush }) => {
	const { cardType } = useContext(CardGridContext);

	return (
		<div
			className={classNames({
				"mb-8": !isFlush,
			})}
		>
			<PageSectionHeading className="!mb-6">{heading}</PageSectionHeading>
			<CardGrid>
				{teams.map(team => (
					<Card
						key={team.id}
						imageUri={`https://cdn.discordapp.com/team-icons/${team.id}/${team.icon}.png`}
						type={cardType}
						href={`/teams/${team.id}`}
					>
						{team.name}
					</Card>
				))}
			</CardGrid>
		</div>
	);
};

export default TeamGrid;
