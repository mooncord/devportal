/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import classNames from "classnames";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import Icon from "./Icon";
import Select from "./Select";

interface CardGridOptionTileProps {
	active: boolean;
	children: React.ReactNode;
	icon: string;
	onClick: () => void;
}

const CardGridOptionTile: FC<CardGridOptionTileProps> = ({
	children,
	active,
	icon,
	onClick,
}) => (
	<button
		className={classNames(
			"flex items-center justify-evenly w-[82px] h-[40px] rounded ml-4 first:ml-0 transition-all duration-200 ease-linear text-interactive-normal hover:text-interactive-hover",
			{
				"bg-secondary text-interactive-active": active,
			},
		)}
		onClick={onClick}
	>
		<Icon className="w-6 h-6" icon={icon} />
		<span className="text-sm font-medium">{children}</span>
	</button>
);

export const CardGridContext = createContext({
	sortBy: "id",
	cardType: "SMALL_CARD",
});

const CardGridContainer: FC = ({ children }) => {
	const [sortBy, setSortBy] = useState("id");
	const [cardType, setCardType] = useState("SMALL_CARD");

	return (
		<>
			<div className="flex items-center justify-between mb-8">
				<div className="flex items-center grow">
					<Select
						className="w-[170px]"
						value={sortBy}
						options={[
							{
								value: "id",
								label: "Date Created",
							},
							{
								value: "name",
								label: "A-Z",
							},
						]}
						onChange={value => setSortBy(value)}
					>
						Sort By:
					</Select>
				</div>
				<div className="flex">
					<CardGridOptionTile
						onClick={() => setCardType("SMALL_CARD")}
						active={cardType === "SMALL_CARD"}
						icon="grid-small"
					>
						Small
					</CardGridOptionTile>
					<CardGridOptionTile
						onClick={() => setCardType("LARGE_CARD")}
						active={cardType === "LARGE_CARD"}
						icon="grid-large"
					>
						Large
					</CardGridOptionTile>
				</div>
			</div>
			<CardGridContext.Provider value={{ sortBy, cardType }}>
				{children}
			</CardGridContext.Provider>
		</>
	);
};

interface CardGridProps {
	children: ReactNode[];
}

export const CardGrid: FC<CardGridProps> = ({ children }) => {
	const { cardType } = useContext(CardGridContext);

	return (
		<ul
			className={classNames(
				"grid",
				{
					"grid-cols-cards-small": cardType === "SMALL_CARD",
				},
				{
					"grid-cols-cards-large": cardType === "LARGE_CARD",
				},
			)}
		>
			{children}
		</ul>
	);
};

export default CardGridContainer;
