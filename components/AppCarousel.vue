<template>
	<section class="carousel">
		<div class="carousel__meta">
			<h1>Sangat Disukai 6309+</h1>
			<p>Telah didistribusikan ke berbagai penjuru di seluruh dunia</p>
		</div>
		<div class="carousel__img">
			<div class="carousel__img__wrap">
			<VueSlickCarousel :arrows="true" :dots="true" ref="carousel" >
				<img src="https://placeimg.com/640/480/any" alt="any" />
				<img src="https://placeimg.com/640/480/any" alt="animals" />
				<img src="https://placeimg.com/640/480/any" alt="tech" />
				<img src="https://placeimg.com/640/480/any" alt="nature" />
			</VueSlickCarousel>
			</div>
		</div>
	</section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
	components: {
		VueSlickCarousel
	},
	mounted() {
		this.clickCarousel();
	},
	methods: {
		clickCarousel() {
			setInterval(() => {
				this.$refs.carousel.next();
			}, 6000)
		}
	}
}
</script>

<style lang="postcss">
.carousel {
	@apply w-full px-8 py-10;
	display: flex;
	flex-direction: column;
	justify-content: center;

	&__meta {
		@apply mb-8;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		> h1 {
			@apply text-3xl text-center;
		}

		> p {
			@apply text-center;
		}
	}

	&__img {
		display: flex;
		align-items: center;
		justify-content: center;

		&__wrap {
			width: 40%;

			@media screen and (max-width: 768px) {
				width: 70%;
			}
		}
	}
}
</style>