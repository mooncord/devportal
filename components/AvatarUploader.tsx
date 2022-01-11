/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import { FC } from "react";
import Image from "next/image";
import Icon from "./Icon";

interface AvatarUploaderProps {
	avatar: string;
	onChange: (avatar: string) => void;
	disabled?: boolean;
	disableRemoveAction?: boolean;
	fieldName?: string;
	shape?: "circle" | "square";
	size?: number;
	hint?: string;
}

const AvatarUploader: FC<AvatarUploaderProps> = ({
	avatar,
	onChange,
	disabled,
	disableRemoveAction,
	fieldName,
	shape,
	size,
	hint,
}) => {
	return (
		<div className="text-center ml-4">
			<div className="group relative w-[100px] h-[100px] rounded-full shadow-high text-white">
				<div className="relative w-full h-full">
					<Image
						layout="fill"
						src={avatar}
						alt="Avatar"
						className="w-full h-full rounded-full"
					/>
					<div className="invisible group-hover:visible absolute w-full h-full rounded-full bg-[#0009]" />
				</div>
				<div className="text-[10px] font-bold text-center uppercase whitespace-pre pointer-events-none invisible group-hover:visible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					{hint}
				</div>
				<div className="flex items-center justify-center absolute top-0 right-0 w-7 h-7 rounded-full bg-[#fff] dark:bg-[#dcddde]">
					<Icon
						icon="add-image"
						className="w-[18px] h-[18px] text-[#99aab5] dark:text-[#4f545c]"
					/>
				</div>
				<input
					className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
					type="file"
					accept=".jpg,.jpeg,.png"
					name={fieldName}
					onChange={event => {
						const file = event.target.files?.[0];

						if (file) {
							const reader = new FileReader();

							reader.onload = event => {
								onChange(event.target?.result as string);
							};
						}
					}}
				/>
			</div>
			{!disableRemoveAction && (
				<button className="mt-[10px] text-sm font-semibold text-interactive-normal hover:text-interactive-hover">
					Remove
				</button>
			)}
		</div>
	);
};

export default AvatarUploader;
