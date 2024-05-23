/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/*.jsx', './src/components/*.jsx'],
	theme: {
		extend: {
			fontFamily: {
				sofachrome: ['Sofachrome', 'sans-serif'],
			},
			colors: {
				primary: '#4b6b80',
				secondary: '#cfdee7',
			},
		},
	},
	plugins: [],
};
