/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#F21246",
      	secondary: "#9333EA",
      	darkBlue: "#1D3557",
      	darkRed: "#F21246",
      	nearWhite: "#FCFCFC",
			},
		},
	},
	plugins: [],
}
