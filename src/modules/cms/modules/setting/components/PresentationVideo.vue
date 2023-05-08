<template>
	<div v-if="setting.id != null">
		
		<!-- option upload video -->
		<div class="row mt-5 mb-4" v-if="!loading && setting.video_presentation == null">
			<div class="offset-lg-3 col-lg-6">
				<div id="video-upload" @click="selecVideo()">
					<i class="fa fa-cloud-arrow-up text-secondary"></i>
					<h5 class="text-secondary mt-4">Upload Presentation Video</h5>
					
				</div>
			</div>			
		</div>


		<!-- input type file video -->
		<input type="file" name="video_presentation" id="video_presentation" hidden @change="updateVideoPresentation()">


		<!-- video player -->
		<div class="row mt-5 mb-4" v-if="!loading && setting.video_presentation != null">
			<div class="offset-lg-2 col-lg-8">

				<div class="text-end mb-3">
					<button class="btn btn-blue p-2" @click="selecVideo()">UPDATE VIDEO</button>
				</div>

				<video :src="backend+'../'+setting.video_presentation" controls width="100%" id="video_player"></video>
			</div>			
		</div>
		

		<!-- alert wait -->
		<div class="row mt-5 mb-5" v-if="loading">
			<div class="offset-lg-3 col-lg-6">
				<div class="progress">
				  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
				</div>
		    <div class="alert alert-info text-center mt-4" role="alert">
				  <h5>Uploading video. Please wait...</h5>
				</div>
			</div>	
		</div>


	</div>
</template>


<style>
	
	#video-upload {
		border: dashed 3px #c5c5c5;
		text-align: center;
		padding: 30px;
	}

	#video-upload:hover {
		cursor: pointer;
		background: #f5f5f5;
	}

	#video-upload i {
		font-size: 150px;
	}

</style>


<script>
	
	import SettingService from '@/shared/services/SettingService'

	export default
	{
		data() {
			return {
				loading: false,
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
			},


			selecVideo() {
    		$('#video_presentation').click()
    	},


			async updateVideoPresentation()
			{
				this.loading = true

    		const form = new FormData()
    		form.append('video', document.getElementById('video_presentation').files[0])

    		const resp = await SettingService.updateVideoPresentation(form)

    		if(resp.data == 'EXT_INVALIDA')
    			SwalMixin('The file must have an .mp4 extension', 'error')
    		else
    		{
    			this.setting.video_presentation = resp.data
    			document.getElementById('video_presentation').value = ''
    			this.loading = false

    			SwalMixin('Video uploaded', 'success')
    		}
			}

		}
	}

</script>