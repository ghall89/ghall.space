import { Tag } from 'src/types';

const renderFile = (
	title: string,
	date: string,
	tags: string[],
	md: string
) => `
---
title: ${title}
pubDate: ${date}
tags: ['${tags.join("', '")}']
---

${md}
`;

const newPost = () => {
	const tagArr = Object.values(Tag);

	console.log(tagArr);
};

newPost();
