import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from 'eslint/config';

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
	globalIgnores(['dist/*', '.astro/*', 'node_modules/*', 'src/env.d.ts']),
	js.configs.recommended,
	tseslint.configs.recommended,
	prettier,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.ts'],
	},
]);
