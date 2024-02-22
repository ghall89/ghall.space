// navigation links
export type NavLink = {
	label: string;
	path: string;
};

// blog tags
export enum Tag {
	'Apps' = 'Apps',
	'Digital Life' = 'Digital Life',
	'Gaming' = 'Gaming',
	'Learning' = 'Learning',
	'Life' = 'Life',
	'MacOS' = 'MacOS',
	'Music' = 'Music',
	'Making Stuff' = 'Making Stuff',
	'Mental Health' = 'Mental Health',
	'Movies & TV' = 'Movies & TV',
	'Programming' = 'Programming',
	'Tech' = 'Tech',
	'Tutorial' = 'Tutorial',
	'Web Dev' = 'Web Dev',
	// only for filtering
	all = 'all',
}
