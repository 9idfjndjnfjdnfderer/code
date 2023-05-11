<template>

	<div id="testimonial">
		
			
		<h4 class="pb-2" id="testim-title">Moto-Ya Proof of Success</h4>

		
		<div class="container mt-5">
			
			<!-- posts -->
			<div class="row testim-row">

				<div class="col-lg-3 col-sm-6 me-lg-4 offset-sm-0 col-10 mb-5">
					<div class="testim-img-content">
						<img src="@/assets/img/testim1.webp" class="w-100">
					</div>
					<h6 class="mt-3 mb-0 text-white text-center">MOTO-YA GROUPS</h6>
				</div>

				<div class="col-lg-3 col-sm-6 me-lg-4 offset-sm-0 col-10 mb-5">
					<div class="testim-img-content">
						<img src="@/assets/img/testim4.webp" class="w-100">
					</div>
					<h6 class="mt-3 mb-0 text-white text-center">DRIVERS MOTO-YA GROUP</h6>
				</div>

				<div class="col-lg-3 col-sm-6 offset-sm-0 col-10 mb-5">
					<div class="testim-img-content">
						<img src="@/assets/img/testim2.webp" class="w-100">
					</div>
					<h6 class="mt-3 mb-0 text-white text-center">MOTO-YA GROUPS</h6>
				</div>

				<div class="col-lg-3 col-sm-6 me-lg-4 offset-sm-0 col-10 mb-5">
					<div class="testim-img-content">
						<img src="@/assets/img/testim5.webp" class="w-100">
					</div>
					<h6 class="mt-3 mb-0 text-white text-center">LOCATION GROUP. DRIVERS CONNECTING TO WORK</h6>
				</div>

				<div class="col-lg-3 col-sm-6 offset-sm-0 col-10 mb-5">
					<div class="testim-img-content">
						<img src="@/assets/img/testim3.webp" class="w-100">
					</div>
					<h6 class="mt-3 mb-0 text-white text-center">USER REQUIRING A SERVICE</h6>
				</div>

			</div>

			<!--/ posts -->


			<!-- btn go to video -->
			<div class="row mt-3">
				<div class="offset-lg-4 col-lg-4">
					<router-link class="btn w-100 p-3 btn-orange" to="/auth/register/">¡INSTRUCTIONAL VIDEO NOW!</router-link>
				</div>
			</div>


		</div>
			
	</div>
	
</template>


<style>
	
	#testimonial {
		background: hsl(210, 51%, 15%);
		padding-top: 70px;
		padding-bottom: 70px;
	}

	#testim-title {
		font-weight: normal !important;
		color: rgb(255, 138, 26);
		text-align: center;
	}

	.testim-row {
		justify-content: center;
	}

	.testim-img-content {
		height: 450px;
		overflow: hidden;
		border-radius: 3px;
	}

	@media(max-width: 1024px) {

		.testim-img-content {
			height: 350px;
		}

	}

	@media(max-width: 991px) {

		.testim-img-content {
			height: 400px;
		}

	}

</style>