<template>
	<section class="brand">
		<div class="brand__title">
			<h2>Kini Anda Dapat Menikmati</h2>
			<p>Sensasi Kelezatan Buah Kurma yang Sesungguhnya!</p>
		</div>
		<div class="brand__img">
			<img src="https://3.bp.blogspot.com/-chwD95aeCb0/XraXkKCiReI/AAAAAAAABTg/OO0E5pP4AdIUDJg2fXY4URrGEN82EWCBgCK4BGAYYCw/s1600/kingsalman.png" alt="king salman">
		</div>
	</section>
</template>

<style lang="postcss">
.brand {
	@apply px-8 py-8 w-full bg-white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&__title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		> h2 {
			@apply text-2xl;
		}
	}

	&__img {
		@apply mt-5;
	}
}
</style>