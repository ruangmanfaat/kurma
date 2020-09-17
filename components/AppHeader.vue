<template>
	<div class="header">
		<div class="header__img">
			<app-img src="/brand/kurma.jpg" alt="kurma" />
		</div>
		<div class="header__product">
			<h1>Produsen Kurma Indonesia</h1>
			<h5>Sudah Pernah Merasakan Keistimewaan Kurma Premium?</h5>
			<p>"Tekstur Lembut, Lumer di Mulut, Manisnya Pas"</p>
			<button class="header__add hover:bg-red-800">
				<span>
					<i class="fas fa-shopping-cart"></i>
				</span>
				Coba Sekarang
			</button>
		</div>
	</div>
</template>

<style lang="postcss">
.header {
	@apply relative;
	display: flex;
	flex-direction: column;
	justify-content: center;

	&__img {
		z-index: -1;
		margin-top: -10rem;

		img {
			@apply h-128 object-cover;
			filter: brightness(30%);
		}
	}

	&__product {
		@apply z-20 w-full absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;	

		> h1, h5, p {
			@apply text-white;
		}

		> h1 {
			@apply text-4xl;
		}

		> h5 {
			@apply text-xl;
		}

		> p {
			@apply mt-2;
		}

		> button {
			@apply py-4 px-6 rounded text-white bg-red-600 text-base mt-4;
		}
	}
}
</style>