<template>
	
	<div>

		<div class="row pt-5 pb-5">
		  <div class="offset-lg-3 col-lg-6 offset-md-2 col-md-8">
		

		  	<form @submit.prevent="login()" id="login-form">
			  	<div class="card auth-card">

			  		<div class="card-body ps-sm-5 pe-sm-5">


			  			<div class="text-center">
			  			  <router-link to="/"><img src="@/assets/img/logo.webp" alt="Logo" id="auth-logo"></router-link>
			  			</div>



			  			<p class="text-center ps-2 pe-2 mt-4 font-montserrat-bold login-info" style="font-size: 16px">
			  				New drivers create your account now to get started, existing drivers click "Login now" below.
			  			</p>

			  			<p class="text-center text-orange ps-2 pe-2 mt-4 font-montserrat-bold login-info" style="font-size: 16px">
			  				*PLEASE USE <span style="text-decoration: underline;">THE SAME EMAIL</span> YOU USED WHEN REGISTERING THE PROGRAM!
			  			</p>



			  			<h5 class="mt-5">LOG IN TO YOUR ACCOUNT</h5>

			  			<hr>

			  			<div class="form-group">
			  				<label class="form-label">EMAIL:</label>
					     	<input type="email" class="form-control" name="email" id="email" v-model="user.email"> 
					    </div>

					    <div class="form-group mt-3">
					    	<label class="form-label">PASSWORD:</label>
					     	<input type="password" class="form-control" name="password" v-model="user.password">
					    </div>



					    <!-- alert wait -->
					    <div class="alert alert-info text-center mt-4 d-none" role="alert" id="login-alert-wait">
							  Wait a moment please...
							</div>

					    <!-- error -> penalizacion -->
							<div class="alert alert-danger text-center mt-4" v-if="penalize">
				      	Too many failed attempts. He tries again in <b>{{penaltyTime}}</b> seconds.
				    	</div>



					    <div class="text-center mt-4">
					    	<button type="submit" class="btn btn-orange auth-btn-submit w-100 p-3" id="failed_attempts">LOG IN TO YOUR ACCOUNT</button>
					    </div>

					    <div id="login-options" class="mt-4">
					    	<p class="text-center">
					    		<router-link class="font-montserrat-bold" to="/auth/forgot-password/">Did you forget the password?</router-link>	
					    	</p>
					    </div>



					    <p class="text-center mt-5">
					    	<b class="font-chunkfive-regular">PRO TIP:</b> Save the link to quickly access the platform whenever you need: <b class="font-montserrat-bold">easymotoyatrainingprogram.com/drivers</b>
					    </p>

					    <p class="text-center">
					    	If you need help or have any problem whatsoever, send us an email at <span class="font-montserrat-bold">soporte@easymotoyatrainingprogram.com</span> or message us on <span class="font-montserrat-bold">WhatsApp</span> at <span class="font-montserrat-bold">+1 (647) 510-2259</span> and we will get back to you shortly.
					    </p>

			  		</div>

			  	</div>


			  	<!-- copyright -->
  		  	<p class="text-secondary font-montserrat-bold text-center mt-4 mb-0">
  		  		&copy; 2023 Training Program MOTO-YA. All rights reserved.
  		  	</p>

		  	</form>


		  </div>
		</div>

	</div>

</template>


<style>
	
	#login-form p {
		font-weight: normal !important;
	}

	@media(max-width: 375px) {

		.login-info {
			font-size: 13px !important;
		}

	}

</style>


<script>
	
	import UserService from '@/shared/services/UserService'

	export default 
	{
		
		data() {
			return {
				user: {
					email: null,
					password: null
				},

				penalize: false,
				penaltyTime: 0
			}
		},

		methods: {

			async login()
			{
				$('#login-form').validate({
		      rules: {
		        email: { required:true, email:true },
		        password: { required:true, minlength:8, maxlength:20 }
		      }
		    })


		    if($('#login-form').valid())
		    {
					const resp = await UserService.login(this.user)

		    	if(resp.data.mesg == 'OK')
		    	{
		    		localStorage.setItem('token', resp.data.token)
						this.$router.push('/cms/')
		    	}

		    	else if(resp.data.mesg == 'PENALIZE') // penalizacion
		  		{
		  			this.penalize = true
		  			this.penaltyTime = resp.data.penalty_time
		  			$('#login-form-btn').prop('disabled', true)

		  			setTimeout(()=> this.desactivePenalize(), 1000)
		  		}

		  		else if(resp.data.mesg == 'ACCOUNT_INACTIVE') // account inactive
		  		{
		  			SwalAlert('', 'Your account is inactive', 'warning')
		  		}

					else // error user or password
		  		{
		  			SwalAlert('', 'Wrong email or password.', 'error')
		  		}
				}
			},


			desactivePenalize()
			{
				--this.penaltyTime
				if(this.penaltyTime == 0)
				{
					this.penalize = false
					$('#login-form-btn').prop('disabled', false)
				}
				else
					setTimeout(()=> this.desactivePenalize(), 1000)
			}

		}

	}

</script>