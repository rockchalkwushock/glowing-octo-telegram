const { resolve } = require('path')
const aliases = require('vite-tsconfig-paths').default

module.exports = {
	addons: [
		// https://storybook.js.org/addons/@storybook/addon-a11y/
		'@storybook/addon-a11y',
		// https://storybook.js.org/addons/@storybook/addon-links/
		'@storybook/addon-links',
		// https://storybook.js.org/addons/tag/essentials/
		'@storybook/addon-essentials',
		// https://storybook.js.org/addons/storybook-addon-react-router-v6/
		'storybook-addon-react-router-v6',
		{
			// https://storybook.js.org/addons/@storybook/addon-postcss
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
		{
			// https://storybook.js.org/addons/@storybook/addon-storysource
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
		// https://storybook.js.org/docs/react/builders/vite
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
			// Enables the use of aliases in stories (i.e. @components/Button)
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
