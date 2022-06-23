const { resolve } = require('path')
const aliases = require('vite-tsconfig-paths').default

module.exports = {
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-addon-react-router-v6',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
		{
			name: '@storybook/addon-storysource',
			options: {
				rule: {
					include: [resolve(__dirname, '../src')],
				},
				loaderOptions: {
					prettierConfig: {
						arrowParens: 'avoid',
						bracketSameLine: false,
						bracketSpacing: true,
						jsxSingleQuote: true,
						printWidth: 80,
						quoteProps: 'as-needed',
						semi: false,
						singleQuote: true,
						tabWidth: 2,
						trailingComma: 'es5',
						useTabs: true,
					},
				},
			},
		},
	],
	core: {
		builder: '@storybook/builder-vite',
	},
	features: {
		storyStoreV7: true,
	},
	framework: '@storybook/react',
	staticDirs: ['../src/assets', '../public'],
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	async viteFinal(config, { configType }) {
		return {
			...config,
			plugins: [...config.plugins, aliases()],
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
				},
			},
		}
	},
}
