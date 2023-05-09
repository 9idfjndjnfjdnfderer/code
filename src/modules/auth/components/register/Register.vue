<template>
	<div>


		<!-- banner -->
		<div class="row mt-5">
			<div class="offset-lg-1 col-lg-10">

				<!-- slider -->
				<div id="register-slider" class="carousel slide" data-bs-ride="carousel">
				  
					<!-- indicators -->
				  <div class="carousel-indicators">
				    <button type="button" data-bs-target="#register-slider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				    <button type="button" data-bs-target="#register-slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
				    <button type="button" data-bs-target="#register-slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
				  </div>

				  <!-- imgs -->
				  <div class="carousel-inner">
				    <div class="carousel-item active">
				      <img src="@/assets/img/auth-banner.webp" class="d-block w-100" alt="...">
				    </div>
				    <div class="carousel-item">
				      <img src="@/assets/img/auth-banner2.webp" class="d-block w-100" alt="...">
				    </div>
				    <div class="carousel-item">
				      <img src="@/assets/img/auth-banner3.webp" class="d-block w-100" alt="...">
				    </div>
				  </div>

				  <!-- btns prev and next -->
				  <button class="carousel-control-prev" type="button" data-bs-target="#register-slider" data-bs-slide="prev">
				    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span class="visually-hidden">Previous</span>
				  </button>
				  <button class="carousel-control-next" type="button" data-bs-target="#register-slider" data-bs-slide="next">
				    <span class="carousel-control-next-icon" aria-hidden="true"></span>
				    <span class="visually-hidden">Next</span>
				  </button>

				</div>
			</div>
		</div>
		<!--/ banner -->


		<div class="row pt-5 pb-5" v-if="drivers_coupons != null">
		  <div class="offset-md-2 col-md-8">

  			<form @submit.prevent="create()" id="register-form">


  				<!-- alert coupons -->
  				<div class="alert alert-primary mt-2" role="alert" v-if="drivers_coupons > 0">
						<h3>
							There are {{drivers_coupons}} places available. Join now!!
						</h3>
					</div>
  				<div class="alert alert-warning mt-4" role="alert" v-else>
						<h4>
							We have no more space available at the moment. Be aware, we'll have more space soon!!<br>
							If you want you can contact us via WhatsApp and we will notify you when there are places available
						</h4>
					</div>
  				

					<!-- card form -->
  		  	<div class="card auth-card" v-if="drivers_coupons > 0">

  		  		<div class="card-body bg-light pb-4">


  						<div class="auth-header">
  							<div>
  								<router-link to="/">
  									<img src="@/assets/img/logo.webp" alt="Logo" id="auth-logo">
  								</router-link>
  							</div>
  							<div class="ms-4 text-blue">
  								<h5>Easy Moto-Ya <br> Training Program</h5>
  								<h5>FREE!!</h5>
  							</div>
  						</div>

  		  			<hr>

  		  					
			  			<div class="form-group">
			  				<label class="form-label">City</label>
					     	<select class="form-select" name="city" id="city" v-model="user.city">
					     		<option value=""></option>
					     		<option value="Toronto">Toronto</option>
					     		<option value="Vaughan">Vaughan</option>
					     		<option value="Brampton">Brampton</option>
					     		<option value="Missisauga">Missisauga</option>
					     		<option value="Markham">Markham</option>
					     		<option value="Scarborough">Scarborough</option>
					     	</select> 
					    </div>

			  			<div class="form-group mt-3">
			  				<label class="form-label">Full Name</label>
					     	<input class="form-control" name="full_name" id="full_name" v-model="user.full_name"> 
					    </div>

					    <div class="form-group mt-3">
			  				<label class="form-label">Email</label>
					     	<input class="form-control" name="email" id="email" v-model="user.email"> 
					    </div>

					    <div class="form-group mt-3">
			  				<label class="form-label">Confirm your Email</label>
					     	<input class="form-control" name="confirm_email" id="confirm_email" v-model="user.confirm_email"> 
					    </div>

					    <div class="form-group mt-3">
			  				<label class="form-label">Phone number (WhatsApp)</label>
					     	<input class="form-control" name="phone" id="phone" v-model="user.phone">
					    </div>


	  					<p class="text-secondary mt-5">
	  						<small>
	  							You must have:  <br>
		  						- Vehicle ownership. <br>	   
		  						- Insurance policy. <br>
		  						- have a minimum of at least three years’ driving experience.
	  						</small>
	  					</p>


	  					<!-- accepts terms and conditions -->
	  					<div class="form-check mt-3">
							  <input class="form-check-input" type="checkbox" name="terms" id="terms">
							  <label class="form-check-label" for="terms">
							  	I accept the <router-link to="/terms_conditions_drivers" target="_blank">terms and conditions.</router-link>
							  </label>
							  <label class="error error-label" id="terms-error" for="terms" style="display:block;"></label>
							</div>


							<!-- alert wait -->
	  					<div class="alert alert-success mt-4 d-none" role="alert" id="register-alert-wait">
							  Wait a moment please...
							</div>


	  					<button class="btn w-100 mt-4 p-2" type="submit" id="register-btn-submit">I want to work with Moto-Ya, Click Here!!!</button>

  		  		</div>
  		  	</div>
  		  	<!--/ card form -->


  		  	<!-- btn contact whatsapp -->
  		  	<a class="btn w-100 mt-5 mb-4 p-3" href="https://api.whatsapp.com/send?phone=16475102259&text=Necesito%20Informacion" target="_blank" id="register-btn-whatsapp">
  		  		<i class="fa fa-whatsapp"></i> CONTACT US VIA WHATSAPP!!
  		  	</a>


  	  	</form>

		  </div>
		</div>
		

	</div>
</template>


<style>
	
	.auth-header {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#register-btn-submit {
		background: #009d43;
		color: white;
		font-size: calc(1rem + .6vw);
	}

	#register-btn-submit:hover {
		background: #32373c;
	}

	#register-btn-whatsapp {
		background: #009d43;
		color: white;
		font-size: calc(1rem + .6vw);
		border-radius: 40px;
	}

	#register-btn-whatsapp i {
		font-size: calc(1.3rem + .6vw);
	}

	#register-btn-whatsapp:hover {
		background: #32373c;
	}

</style>


<script>
	
	import EmployeeService from '@/shared/services/EmployeeService'
	import SettingService from '@/shared/services/SettingService'

	import NotificationService from '@/shared/services/NotificationService'


	export default 
	{
		
		data() {
			return {
				user: {
					city: null,
					full_name: null,
					email: null,
					confirm_email: null,
					phone: null
				},

				drivers_coupons: null
			}
		},


		created() {
			this.getCoupons()
		},


		methods: {

			async create()
			{
				$('#register-form').validate({
		      rules: {
		        city: { required:true },
		        full_name: { required:true, only_letters:true },
		        email: { required:true, email:true },
		        confirm_email: { required:true, equalTo:"#email" },
		        phone: { required:true, phone:true },
		        terms: { required:true }
		      }
		    })


				if($('#register-form').valid())
				{
					$('#register-btn-submit').prop('disabled', true)
					$('#register-alert-wait').removeClass('d-none')


					const resp = await EmployeeService.create(this.user)

					console.log(resp.data)

					if(resp.data == 'OK')
					{
						// notify
						let data = {
							full_name: this.user.full_name
						}
						NotificationService.notifyRegister(data)


						this.$router.push('/auth/send-email/'+this.user.email)
					}
					else if(resp.data == 'EMAIL_EXISTS')
					{
						SwalAlert('', 'The email entered is already registered', 'error')
					}


					$('#register-alert-wait').addClass('d-none')
					$('#register-btn-submit').prop('disabled', false)	
				}	
			},


			async getCoupons()
			{
				const resp = await SettingService.get()
				this.drivers_coupons = resp.data.drivers_coupons
			}

		}

	}

</script>