<template>
	<div>
		
		<div class="row">
			<div class="offset-lg-3 col-lg-6">
				
				<form @submit.prevent="updateWhatsAppGroup()" class="p-3" id="whatsapp-group-form">

					<div class="text-center mb-3">
						<i class="fa fa-whatsapp text-secondary" style="font-size: 70px;"></i>
					</div>

					<div class="form-group">
						<label class="form-label">Link WhatsApp Group</label>
						<input class="form-control" name="link_whatsapp_group" id="link_whatsapp_group" v-model="setting.link_whatsapp_group">
					</div>

		      <button type="submit" class="btn btn-blue w-100 p-2 mt-3">
			      UPDATE
			    </button>

				</form>

			</div>
		</div>
		

	</div>
</template>


<script>
	
	import SettingService from '@/shared/services/SettingService'

	export default 
	{
		data() {
			return {
				setting: {
					link_whatsapp_group: null
				}
			}
		},

		created() {
			this.getLinkWhatsAppGroup()
		},

		methods: {

			async getLinkWhatsAppGroup()
			{
				const resp = await SettingService.get()
				this.setting.link_whatsapp_group = resp.data.link_whatsapp_group
			},


			async updateWhatsAppGroup()
			{
				$('#whatsapp-group-form').validate({
		      rules: {
		        link_whatsapp_group: { required:true, description:true }
		      }
		    })


				if($('#whatsapp-group-form').valid())
				{
					const resp = await SettingService.updateWhatsAppGroup(this.setting)

					if(resp.data == 'OK')
						SwalAlert('', 'Link updated', 'success')
					else
						SwalAlert('', 'An error has occurred, please try again', 'error')
				}
			}

		}

	}	

</script>