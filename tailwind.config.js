/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				milky: "url('src/assets/milkyway.jpg)",
				stars: "url('src/assets/stars.jpg')",
			},
			fontFamily: {
				sofachrome: ['Sofachrome', 'sans-serif'],
			},
			colors: {
				primary: '#4b6b80',
				secondary: '#cfdee7',
				space: '#010100',
			},
		},
	},
	plugins: [],
};
