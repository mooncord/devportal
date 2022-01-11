/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import React, { FC, useEffect, useState } from "react";

interface IconProps {
	className?: string;
	icon: string;
}

const Icon: FC<IconProps> = ({ icon, className }) => {
	const [component, setComponent] = useState<JSX.Element | null>(null);

	useEffect(() => {
		import(`../public/assets/icons/${icon}.svg`).then(module => {
			setComponent(module.default);
		});
	}, [icon]);

	return React.cloneElement(component || <div />, { className, name: icon });
};

export default Icon;
