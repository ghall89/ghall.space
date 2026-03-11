import autodockImg from '@assets/projects/autodock.png';
import bggClientImg from '@assets/projects/bgg-client.png';
import keystashImg from '@assets/projects/keystash.png';
import grooveImg from '@assets/projects/groove.png'

export interface Project {
	title: string;
	description: string;
	image: ImageMetadata;
	link: string;
}

export const projects: Project[] = [
	{
		title: 'Groove',
		description: 'An offline music player for iOS. ',
		image: grooveImg,
		link: "https://grooveplayer.app"
	},
	{
		title: 'AutoDock',
		description:
			'A MacOS menubar utility for automatically hiding and showing the Dock based on the screen size of the connected displays.',
		image: autodockImg,
		link: 'https://github.com/ghall89/AutoDock',
	},
	{
		title: 'KeyStash',
		description:
			'A MacOS application for managing software license keys for software purchased outside the Mac App Store.',
		image: keystashImg,
		link: 'https://github.com/ghall89/KeyStash',
	},
	{
		title: 'bgg-client',
		description:
			'A TypeScript client for working with the BoardGameGeek.com API.',
		image: bggClientImg,
		link: 'https://www.npmjs.com/package/bgg-client',
	},
];
