<template>
	<div>
		
		<div class="row">
			<div class="offset-lg-3 col-lg-6">
				
				<form @submit.prevent="changePassword()" class="p-3" id="change-password-form">

					<div class="text-center mb-3">
						<i class="fa fa-key text-secondary" style="font-size: 70px;"></i>
					</div>

					<div class="form-group">
						<label class="form-label">New Password</label>
						<input type="password" class="form-control" name="new_password" id="new_password" v-model="user.new_password">
					</div>

					<div class="form-group">
						<label class="form-label">Confirm Password</label>
						<input type="password" class="form-control" name="confirm_password" id="confirm_password" v-model="user.confirm_password">
					</div>

		      <button type="submit" class="btn btn-blue w-100 p-2 mt-3">
			      Change Password
			    </button>

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
					new_password: null,
					confirm_password: null
				}
			}
		},

		methods: {

			async changePassword()
			{
				$('#change-password-form').validate({
		      rules: {
		        new_password: { required:true, minlength:8, maxlength:20 },
		        confirm_password: { required:true, equalTo:"#new_password" }
		      }
		    })


				if($('#change-password-form').valid())
				{
					const resp = await UserService.changePassword(this.user)

					if(resp.data == 'OK')
					{
						SwalAlert('', 'Password updated', 'success')

						this.user.new_password = null
						this.user.confirm_password = null
					}
					else
						SwalAlert('', 'An error has occurred, please try again', 'error')
				}
			}

		}

	}	

</script>