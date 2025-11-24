export interface NavLink {
	label: string;
	path: string;
}

export const navLinks: NavLink[] = [
	{ label: 'Blog', path: 'blog/page/1' },
	{ label: 'Now', path: 'now' },
	{ label: 'Projects', path: 'projects' },
	{ label: 'Search', path: 'search' },
];
