/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import classNames from "classnames";
import { FC } from "react";

interface ButtonProps {
	className?: string;
	children: React.ReactNode;
	color?: "primary" | "brand";
	look?: "filled" | "outlined";
}

const Button: FC<ButtonProps> = ({
	className,
	children,
	color = "brand",
	look = "filled",
}) => {
	return (
		<button
			className={classNames(
				"text-sm text-white py-3 px-5 rounded",
				{
					"text-[#fff] bg-[#747f8d]":
						look === "filled" && color === "primary",
				},
				{
					"text-[#fff] bg-brand-500":
						look === "filled" && color === "brand",
				},
				{
					"text-[#747f8d] dark:text-[#fff] border-[#747f8d] dark:border-[#fff]":
						look === "outlined" && color === "primary",
				},
				{
					"text-brand-500 border-brand-500":
						look === "outlined" && color === "brand",
				},
				{
					border: look === "outlined",
				},
				className,
			)}
		>
			{children}
		</button>
	);
};

export default Button;
