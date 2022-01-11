/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import { useRouter } from "next/router";
import { FC } from "react";
import Select from "../components/Select";
import DefaultLayout from "./DefaultLayout";
import Image from "next/image";
import Link from "next/link";

interface ApplicationLayoutProps {
	title: string;
	description: string;
	docLink?: {
		href: string;
		label: string;
	};
}

const ApplicationLayout: FC<ApplicationLayoutProps> = ({
	children,
	title,
	description,
	docLink,
}) => {
	const router = useRouter();
	const currentApplicationId = router.query.applicationId as string;

	if (!currentApplicationId) return null;

	// TODO: Get this from a context
	const applications = [
		{
			id: "847374886854197279",
			name: "Testing",
			icon: "ac8697c1a1a909cae6bde2cbd47f438a",
		},
		{
			id: "675150441377431563",
			name: "Testing 2",
			icon: "c5db087d191bd6c024b10fb8634f23b6",
		},
	];

	return (
		<DefaultLayout
			title={title}
			description={description}
			headingChildren={
				docLink && (
					<Link href={docLink.href}>
						<a className="hover:underline text-link">
							{docLink.label}
						</a>
					</Link>
				)
			}
			sidebarSections={[
				{
					title: "Selected Application",
					children: (
						<Select
							value={currentApplicationId}
							onChange={value =>
								router.push(`/applications/${value}`)
							}
							options={applications.map(application => ({
								label: application.name,
								value: application.id,
								children: (
									<Image
										className="w-6 h-6 rounded-full"
										src={`https://cdn.discordapp.com/app-icons/${application.id}/${application.icon}.png`}
										alt={application.name}
										width={24}
										height={24}
									/>
								),
							}))}
						/>
					),
				},
				{
					title: "Settings",
					items: [
						{
							label: "General Information",
							icon: "home",
							href: {
								pathname:
									"/applications/[applicationId]/information",
								query: {
									applicationId: currentApplicationId,
								},
							},
						},
						{
							label: "OAuth2",
							icon: "key",
							href: {
								pathname:
									"/applications/[applicationId]/oauth2",
								query: {
									applicationId: currentApplicationId,
								},
							},
						},
						{
							label: "Bot",
							icon: "robot",
							href: {
								pathname: "/applications/[applicationId]/bot",
								query: {
									applicationId: currentApplicationId,
								},
							},
						},
						{
							label: "Rich Presence",
							icon: "more-info",
							href: {
								pathname:
									"/applications/[applicationId]/rich-presence",
								query: {
									applicationId: currentApplicationId,
								},
							},
						},
						{
							label: "App Testers",
							icon: "person-waving",
							href: {
								pathname:
									"/applications/[applicationId]/testers",
								query: {
									applicationId: currentApplicationId,
								},
							},
						},
						// TODO: Hide Embedded Application behind the "EMBEDDED" flag on applications, probably through a predicate on the sidebar item?
						{
							label: "Embedded Application",
							icon: "gamepad",
							href: {
								pathname:
									"/applications/[applicationId]/embedded",
								query: {
									applicationId: currentApplicationId,
								},
							},
						},
					],
				},
				// Do we even want to bother adding this section as the game store is being deprecated?
				// {
				//   title: 'Store Settings',
				//   items: [
				//     {
				//       label: 'Server Commerce Checklist',
				//       icon: 'checklist',
				//       href: {
				//         pathname: '/applications/[applicationId]/checklist',
				//         query: {
				//           applicationId: '123456789',
				//         },
				//       },
				//     },
				//     {
				//       label: 'SKU Management',
				//       icon: 'basket',
				//       href: {
				//         pathname: '/applications/[applicationId]/skus',
				//         query: {
				//           applicationId: '123456789',
				//         },
				//       },
				//     },
				//     {
				//       label: 'Analytics',
				//       icon: 'analytics',
				//       href: {
				//         pathname: '/applications/[applicationId]/analytics',
				//         query: {
				//           applicationId: '123456789',
				//         },
				//       },
				//     },
				//     {
				//       label: 'Achievements',
				//       icon: 'gameboy',
				//       href: {
				//         pathname: '/applications/[applicationId]/achievements',
				//         query: {
				//           applicationId: '123456789',
				//         },
				//       },
				//     },
				//     {
				//       label: 'Asset Library',
				//       icon: 'assets',
				//       href: {
				//         pathname: '/applications/[applicationId]/testers',
				//         query: {
				//           applicationId: '123456789',
				//         },
				//       },
				//     },
				//     {
				//       label: 'Game Metadata',
				//       icon: 'metadata',
				//       href: {
				//         pathname: '/applications/[applicationId]/testers',
				//         query: {
				//           applicationId: '123456789',
				//         },
				//       },
				//     },
				//   ],
				// },
			]}
		>
			{children}
		</DefaultLayout>
	);
};

export default ApplicationLayout;
