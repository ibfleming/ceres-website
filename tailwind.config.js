/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				milky: "url('src/assets/milkyway.jpg)",
				stars: "url('src/assets/stars.jpg')",
			},
		},
	},
	plugins: [],
};
