module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended', // Make sure this is last
	],
	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'unused-imports',
		'prettier',
	],
	rules: {
		'prettier/prettier': 'error',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'@typescript-eslint/indent': ['error', 'tab'],
		'react/react-in-jsx-scope': 'off', // For React 17+ where importing React is not necessary
		'@typescript-eslint/no-explicit-any': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
