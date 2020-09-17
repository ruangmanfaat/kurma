<template>
	<section class="banner">
		<div class="banner__title">
			<h3>Kenikmatan Hidangan Buah Kurma yang Tiada Tandingannya!</h3>
		</div>
		<div class="banner__img">
			<img src="https://3.bp.blogspot.com/-iB3W_LkWaaM/XraXgJQS1rI/AAAAAAAABS0/jPljSWRPNIgk5Yg3bbe-LQHc5fIJfZnkgCK4BGAYYCw/s1600/badge.png" alt="good">
		</div>
	</section>
</template>

<style lang="postcss">
.banner {
	@apply px-8 py-8 w-full;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&__title {
		> h3 {
			@apply text-2xl;
		}
	}

	&__img {
		@apply mt-5;
	}
}
</style>