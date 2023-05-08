<template>
	<div>
		
		<footer class="p-5 mt-5">
			
			<div class="container">

				<!-- logo -->
				<div class="row">
					<div class="offset-lg-5 col-lg-2 offset-sm-4 col-sm-4 offset-1 col-10">
						<router-link to="/">
							<img src="@/assets/img/logo.webp" class="w-100">
						</router-link>
					</div>
				</div>
				

				<!-- terms and conditions -->
				<p class="text-center mt-5">
					<router-link class="footer-link me-4" to="terms_conditions"><small>General Terms & Conditions</small></router-link> <span id="footer-separator">|</span> 
					<router-link class="footer-link ms-4" to="terms_conditions_drivers"><small>Terms & Conditions for Drivers</small></router-link>
				</p>

			</div>


			<!-- contact -->
			<div id="footer-contact" class="mt-5 mb-4">
				<h5 class="text-center mt-4">CONTACT</h5>
				<p class="text-center mb-0"><i class="fa fa-whatsapp"></i> +1 647 510 2259</p>
				<p class="text-center" style="word-break: break-all;"><i class="fa fa-envelope"></i> info@easymotoyatrainingprogram.com</p>
			</div>
			

			<div class="text-center">
				<img src="@/assets/img/bandera-canada.png" id="flag-canada">
			</div>

			<p class="mb-0 text-center mt-5">
				<small>&copy; 2023 Training Program MOTO-YA. All rights reserved.</small>
			</p>

		</footer>

	</div>
</template>


<style scoped>
	
	footer {
		background: hsl(210, 51%, 15%);
		color: white;
	}

	#footer-title p {
		margin-top: 15px;
		margin-bottom: 0px;
	}

	.footer-link {
		color: rgb(255, 138, 26);
		text-decoration: none;
	}

	#flag-canada {
		width: 100px;
	}

	@media(max-width: 425px) {

		#footer-separator {
			display: none;
		}

		.footer-link {
			margin-right: 0px !important;
			margin-left: 0px !important;
			display: block;
		}

	}

</style>