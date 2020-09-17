<template>
	<div>
		<header>
			<app-header />
		</header>
		<app-banner />
		<app-brand />
		<app-description />
		<app-carousel />
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
import AppBanner from '~/components/AppBanner';
import AppBrand from '~/components/AppBrand';
import AppDescription from '~/components/AppDescription';
import AppCarousel from '~/components/AppCarousel';

export default {
	components: {
		AppHeader,
		AppBanner,
		AppBrand,
		AppDescription,
		AppCarousel
	}
}
</script>

<style lang="postcss">
header {
	@apply relative;
}
</style>