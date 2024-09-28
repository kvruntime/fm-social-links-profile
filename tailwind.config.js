/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
// import defaultTheme from 'tailwindcss/defaultConfig';
export default {
	content: ['./src/**/*.{tsx, jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
