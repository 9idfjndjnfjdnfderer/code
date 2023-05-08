<template>

	<div class="container mt-5 mb-5 pb-4" id="info">
		
		<h2 class="text-center">Why work with us and not with them?</h2>
		<h4 class="text-center">If you are in Toronto join the Moto-Ya services community</h4>

		<div class="font-montserrat-semibold mt-5" id="info-items">
			
			<div class="row">
				
				<div class="offset-lg-1 col-lg-5">
					<p>
						<i class="fa fa-remove info-x"></i> 
						No more unfair prices for delivery services.
					</p>
					<p class="mt-4">
						<i class="fa fa-remove info-x"></i> 
						No more commissions (20% or 25%) for each RIDE service made.
					</p>
					<p class="mt-4">
						Service paid immediately.
					</p>
					<p class="mt-4">
						Payments for services could be Cash or e-Transfers.
					</p>
				</div>

				<div class="col-lg-5">
					<p>
						<i class="fa fa-remove info-x"></i> 
						No more suspensions for not working or for doing a few services.
					</p>
					<p class="mt-4">
						<i class="fa fa-remove info-x"></i> 
						No more access to information on your cell phone through application technology. With Moto-Ya we only have your name, basic information and WhatsApp number.
					</p>
				</div>
			
			</div>

		</div>
		

		<div class="row">
			<div class="offset-lg-1 col-lg-10">
				<h5 class="text-center mt-4">
					Join in the momentum and invite your friends or family to participate in the groups as customers or as drivers.
				</h5>
			</div>
		</div>
		

		<div class="row mt-5">
			<div class="offset-lg-4 col-lg-4">
				<router-link class="btn btn-blue w-100 p-3" id="pres-btn-login" to="/auth/register/">¡100% FREE INDUCTION VIDEO!</router-link>
			</div>
		</div>


	</div>
</template>


<style>

	#info-items {
		font-size: 18px;
		text-align: justify;
	}

	.info-x {
		color: red;
		font-size: 24px;
		position: relative;
		top: +3px;
	}

</style>