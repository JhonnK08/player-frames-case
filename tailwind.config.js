import defaultConfig from 'tailwindcss/defaultConfig';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
			mono: defaultConfig.theme.fontFamily.mono
		},
		extend: {}
	},
	plugins: []
};
