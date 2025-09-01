export interface NavLink {
	label: string;
	path: string;
}

export const navLinks: NavLink[] = [
	{ label: 'Blog', path: 'blog' },
	{ label: 'Now', path: 'now' },
	{ label: 'Projects', path: 'projects' },
];
