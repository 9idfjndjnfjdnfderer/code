<template>
	<div class="mb-4" id="presentation">
		
		<div class="container pt-3 pb-3">

			<div class="row mt-3">
				<div class="offset-lg-2 col-lg-8">
					<h5 class="text-center">
						Toronto – Canada <br>
						Work without paying service fees, <span style="color: rgb(255, 138, 26);">just using WhatsApp <i class="fa fa-whatsapp" style="color: green"></i></span>. Payment method in cash or e-Transfers. Each service is paid at the time of completion. Watch the video and <span style="color: rgb(255, 138, 26);">enter to work with us!</span>
					</h5>
				</div>
			</div>


			<div class="row mt-4" style="justify-content: center;">
				<div class="col-lg-9">
					<video :src="backend+'../'+setting.video_presentation" controls class="border w-100" v-if="setting.video_presentation != null"></video>
				</div>
			</div>


			<div class="row mt-5">
				<div class="offset-lg-4 col-lg-4">
					<router-link class="btn w-100 p-3 btn-blue" id="pres-btn-login" to="/auth/register/">
						CLICK HERE TO SEE WHAT THIS IS ABOUT. 100% FREE
					</router-link>
				</div>
			</div>

			<h5 class="text-center mt-4">
				Start your training to work with us, now!
			</h5>
			
		</div> 

	</div>
</template>


<style>

	

</style>


<script>
	
	import SettingService from '@/shared/services/SettingService'

	export default
	{
		data() {
			return {
				setting: {
					id: null,
					video_presentation: null
				}
			}
		},

		created() {
			this.getVideoPresentation()
		},

		methods: {

			async getVideoPresentation()
			{
				const resp = await SettingService.get()
				this.setting.id = resp.data.id
				this.setting.video_presentation = resp.data.video_presentation
			}

		}
	}

</script>