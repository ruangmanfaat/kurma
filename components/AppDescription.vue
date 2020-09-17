<template>
	<section class="description">
		<div class="description__desc">
			<div class="description__desc__desc">
				<h1>Kurma Premium King Salman</h1>
				<h5>Lembut, Halal serta Sunnah Nabi</h5>
				<p>Kurma King Salman ialah Kurma Raja berkualitas premium/VIP pilihan terbaik, yang didatangkan langsung dari Kerajaan Arab Saudi. Teksturnya yang super lembut di daging bagian dalam, lumer di mulut saat dinikmati, dan sensasi rasa manis seperti caramel yang ia miliki, menjadikannya sbeagai kurma kebanggaan para Raja sejak masa lampau.</p>
			</div>
			<div class="description__desc__img">
				<img src="https://1.bp.blogspot.com/-jYJjVaTrbhI/XraXkIyUDlI/AAAAAAAABT0/IVkDO8vw_fYzV5TJlvjGTXFZ3Xw46hAhwCK4BGAYYCw/s1600/kingsalman2.png" alt="king">
			</div>
		</div>
		<div class="description__testi">
			<div class="description__testi__img">
				<img src="https://4.bp.blogspot.com/-pRO3-GrsbZk/XraXkLy_05I/AAAAAAAABTc/3-VrHe3kJasgXtk9_lcrRyBX-aPYxlkAwCK4BGAYYCw/s1600/kurma2.jpeg" alt="king">
			</div>
			<div class="description__testi__testi">
				<h1>Rasakan Bedanya!</h1>
				<h5>Kurma Premium King Salman akan memberikan pengalaman berbeda bagi Anda</h5>
				<ul>
					<li>
						<span><i class="fas fa-check"></i></span>
						Buah Primadona dari Saudi Arabia
					</li>
					<li><span><i class="fas fa-check"></i></span>Quality control nya sangat extra</li>
					<li><span><i class="fas fa-check"></i></span>Ukuran lebih besar, Tekstur lebih lembut, Manisnya pas</li>
					<li><span><i class="fas fa-check"></i></span>Jenis kurma spesial yang dihidangkan di Masjid Nabawi</li>
					<li><span><i class="fas fa-check"></i></span>Kemasan Produk lebih safety, elegan dan menarik</li>
					<li><span><i class="fas fa-check"></i></span>Eksklusif tidak diperjual belikan di pasar bebas</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
.description {
	@apply px-16 py-10 w-full bg-white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 576px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}

	&__desc {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-content: center;

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
		}

		&__desc {
			display: flex;
			flex-direction: column;

			> h1 {
				@apply text-4xl;
				@media screen and (max-width: 576px) {
					line-height: 1.5;
				}
			}

			> h5 {
				@apply text-xl;
			}

			> p {
				@apply text-lg mt-2;
			}
		}

		&__img {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	&__testi {
		@apply mt-12;
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: center;

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
		}

		&__testi {
			display: flex;
			flex-direction: column;
			@media (max-width: 576px) {
				margin-top: 1rem;
			}

			> h1 {
				@apply text-4xl;
			}

			> h5 {
				@apply text-xl;
			}

			> ul > li {
				@apply px-6 py-4 border-b border-gray-300;
				@media screen and (max-width: 576px) {
					padding-left: .5rem;
					padding-right: .5rem;
				}

				> span {
					@apply mr-3;
				}
			}
		}

		&__img {
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				@apply object-cover py-2 px-1 shadow-xl;
				height: 25rem;
			}
		}
	}
}
</style>