<template>
	<div>
		<header id="blog">
			<app-header />
		</header>
		<app-banner />
		<app-brand />
		<app-description />
		<app-carousel />
		<client-only>
			<vue-scroll-indicator 
				height="2px"
				color="#212529"
				background="text-gray-500"
			/>
		</client-only>
		<app-to-top />
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
import AppBanner from '~/components/AppBanner';
import AppBrand from '~/components/AppBrand';
import AppDescription from '~/components/AppDescription';
import AppCarousel from '~/components/AppCarousel';
import AppToTop from '~/components/AppToTop';

export default {
	components: {
		AppHeader,
		AppBanner,
		AppBrand,
		AppDescription,
		AppCarousel,
		AppToTop
	}
}
</script>

<style lang="postcss">
#blog {
	@apply relative;
}
</style>