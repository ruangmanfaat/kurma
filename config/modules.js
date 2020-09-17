require('dotenv').config();

export default [
	'@nuxtjs/tailwindcss',
	'@nuxtjs/fontawesome',
	[
		'nuxt-responsive-loader', {
			size: 1920,
			placeholder: true,
			quality: 60,
			adapter: require('responsive-loader/sharp')
		}
	]
]