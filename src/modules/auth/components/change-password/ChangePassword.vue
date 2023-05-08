<template>

	<div>
		
		<div class="row pt-5 pb-5">
		  <div class="offset-lg-3 col-lg-6 offset-md-2 col-md-8">

				<form @submit.prevent="changePassword()" id="change-password-form">

					<div class="card auth-card">

						<div class="card-body">

							<div class="text-center">
							  <router-link to="/"><img src="@/assets/img/logo.webp" alt="Logo" id="auth-logo"></router-link>
							</div>

							<h2 class="text-center mt-3">Restore password</h2>

			  			<div class="form-group">
			  				<label class="form-label">EMAIL:</label>
					     	<input type="email" class="form-control" name="email" id="email" v-model="user.email" disabled> 
					    </div>

					    <div class="form-group mt-3">
			  				<label class="form-label">NEW PASSWORD:</label>
					     	<input type="password" class="form-control" name="password" id="password" v-model="user.password"> 
					    </div>

					    <div class="form-group mt-3">
			  				<label class="form-label">CONFIRM PASSWORD:</label>
					     	<input type="password" class="form-control" name="password_confirm" id="password_confirm" v-model="user.password_confirm"> 
					    </div>


					    <div class="text-center mt-4">
					    	<button type="submit" class="btn btn-orange w-100 p-3 auth-btn-submit">RESTORE</button>
					    </div>

					  </div>

					</div>

				</form>
			
			</div>
		</div>

  </div>


</template>


<script>
	
	import UserService from '@/shared/services/UserService'

	export default 
	{

		data() { 
			return {
				user: {
					email: this.$route.params.email,
					token: this.$route.params.token,
					password: null,
					password_confirm: null
				}
			}
		},

	  methods: {

			async changePassword()
			{
				$('#change-password-form').validate({
		      rules: {
		        email: { required:true, email:true },
		        password: { required:true, minlength:8, maxlength:20 },
		        password_confirm: { required:true, equalTo:'#password' }
		      }
		    })


				if($('#change-password-form').valid())
				{
					const resp = await UserService.changePasswordAuth(this.user)
					
					if(resp.data == 'OK')
					{
						SwalAlert('', 'Password reset', 'success')
						this.$router.push('/auth')
					}
					else
					{
						SwalAlert('', 'An error has occurred, please try again', 'error')
					}
				}
				
			}

		}
	}

</script>