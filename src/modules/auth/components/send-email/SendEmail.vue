<template>
	<div>
		
		<div class="row mt-5 pt-5 pb-5">
		  <div class="offset-md-2 col-md-8">

				<div class="card auth-card">
		  		<div class="card-body">

		  			<div class="text-center">
		  			  <router-link to="/"><img src="@/assets/img/logo.webp" alt="Logo" id="auth-logo"></router-link>
		  			</div>

		  			<h3 class="text-center mt-3">Resend email</h3>

		  			<p class="mt-4 text-center mb-5">
		  				We have sent the access data to your new account to the email: {{email}}. If you have not received the email, click <a style="cursor: pointer;" @click="resendEmail()" class="text-orange">here</a>.
		  			</p>

		  		</div>
		  	</div>

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
				email: this.$route.params.email
			}
		},

		methods: {

			async resendEmail()
			{
				let data = {
					email: this.email
				}

				const resp = await UserService.resendEmail(data)

				if(resp.data == 'OK')
					SwalAlert('', 'Mail forwarded successfully', 'success')
				else
					SwalAlert('', 'An error has occurred, please try again', 'error')
			}

		}

	}

</script>