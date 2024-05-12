// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually

	tutorialSidebar: [
		{
			type: 'html',
			value: 'Start Here',
			className: 'sidebar-title'
		},
		{
			id: 'getting-started',
			label: '✨ Getting Started',
			type: 'doc'
		},
		{
			type: 'html',
			value: 'Core Concepts',
			className: 'sidebar-title'
		},
		{
			type: 'category',
			label: 'Create Robo',
			items: [
				{
					id: 'create-robo/overview',
					label: 'Overview',
					type: 'doc'
				},
				'create-robo/linting',
				'create-robo/typescript'
			]
		},
		{
			type: 'category',
			label: 'Hosting',
			items: [
				{
					id: 'hosting/overview',
					label: 'Overview',
					type: 'doc'
				},
				'hosting/roboplay',
				'hosting/self-host'
			]
		},
		{
			type: 'category',
			label: 'Robo.js',
			items: [
				{
					id: 'robojs/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				'robojs/cli',
				'robojs/config',
				'robojs/files',
				'robojs/flashcore',
				{
					id: 'robojs/internals',
					label: '👀 Internals',
					type: 'doc'
				},
				'robojs/logger',
				'robojs/modules',
				'robojs/plugins',
				'robojs/portal',
				'robojs/sage',
				'robojs/states'
			]
		},
		{
			type: 'html',
			value: 'Building Apps',
			className: 'sidebar-title'
		},
		{
			type: 'category',
			label: 'Discord Activities',
			items: [
				{
					id: 'discord-activities/overview',
					label: '✨ Getting Started',
					type: 'doc'
				},
				'discord-activities/multiplayer'
			]
		},
		{
			type: 'category',
			label: 'Discord Bots',
			items: [
				{
					id: 'discord-bots/overview',
					label: '✨ Getting Started',
					type: 'doc'
				},
				'discord-bots/commands',
				'discord-bots/context-menu',
				'discord-bots/debug',
				'discord-bots/events',
				'discord-bots/invite',
				'discord-bots/middleware',
				{
					id: 'discord-bots/migrate',
					label: '⭐ Migrating',
					type: 'doc'
				},
				'discord-bots/secrets'
			]
		},
		{
			type: 'html',
			value: 'Ecosystem',
			className: 'sidebar-title'
		},
		{
			type: 'link',
			label: 'Discord Community',
			href: 'https://roboplay.dev/discord'
		},
		{
			type: 'category',
			label: 'Plugins',
			items: [
				{
					id: 'plugins/overview',
					label: 'Overview',
					type: 'doc'
				},
				'plugins/ai',
				'plugins/ai-voice',
				'plugins/better-stack',
				'plugins/dev',
				'plugins/maintenance',
				'plugins/moderation',
				'plugins/server',
				'plugins/sync'
			]
		},
		{
			type: 'category',
			label: 'Templates',
			items: [
				{
					type: 'category',
					label: 'Discord Activities',
					items: [
						{
							type: 'link',
							label: 'Starter Vanilla, JS',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/starter-activity-javascript'
						},
						{
							type: 'link',
							label: 'Starter Vanilla, TS',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/starter-activity-typescript'
						},
						{
							type: 'link',
							label: 'Starter React, JS',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/starter-app-js-react'
						},
						{
							type: 'link',
							label: 'Starter React, TS',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/starter-app-ts-react'
						},
						{
							type: 'link',
							label: 'Starter Colyseus, React, JS',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/activity-js-colyseus-react'
						},
						{
							type: 'link',
							label: 'Starter Colyseus, React, TS',
							href: 'https://github.com/Wave-Play/robo.js/blob/main/templates/activity-ts-colyseus-react'
						}
					]
				},
				{
					type: 'category',
					label: 'Discord Bots',
					items: [
						{
							type: 'link',
							label: 'Starter JS',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/starter-bot-javascript'
						},
						{
							type: 'link',
							label: 'Starter TS',
							href: 'https://github.com/Wave-Play/robo.js/tree/main/templates/starter-bot-typescript'
						}
					]
				}
			]
		}
	]
}

module.exports = sidebars
