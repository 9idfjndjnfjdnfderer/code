<template>
	<div>
		
		<div class="row">
			<div class="offset-lg-1 col-lg-10">
				

				<form @submit.prevent="create()" id="chapter-create-form">
					
					<div class="form-group">
						<label class="form-label">Title</label>
						<input class="form-control" name="title" v-model="chapter.title">
					</div>

					<div class="form-group mt-3">
						<label class="form-label">Video</label>

			
						<!-- option upload video -->
						<div id="video-upload" @click="selecVideo()" v-if="!loadingVideo && chapter.video == null">
							<i class="fa fa-cloud-arrow-up text-secondary"></i>
							<h5 class="text-secondary mt-4">Upload Video</h5>
						</div>


						<!-- show video player -->
						<div id="video-player-content" v-if="!loadingVideo && chapter.video != null">
							<div class="text-end mb-3">
								<button type="button" class="btn btn-blue p-2" @click="selecVideo()">UPDATE VIDEO</button>
							</div>
							<video :src="backend+'../'+chapter.video" controls width="100%" id="video-player"></video>
						</div>
							

						<!-- alert wait - upload video -->
						<div class="mt-5 mb-5" v-if="loadingVideo">
							<div class="progress">
							  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
							</div>
					    <div class="alert alert-info text-center mt-4" role="alert">
							  <h5>Uploading video. Please wait...</h5>
							</div>
						</div>


						<!-- input type file video -->
						<input type="file" name="video" id="video" hidden @change="uploadVideo()">


					</div>


					<div class="form-group mt-3">
						<label class="form-label">Content</label>
						<div id="content" style="min-height: 300px;"></div>
					</div>


					<div class="form-check mt-3">
					  <input class="form-check-input" type="checkbox" name="link_whatsapp_group" id="link_whatsapp_group" v-model="chapter.show_link_whatsapp">
					  <label class="form-check-label" for="link_whatsapp_group">
					  	Show link to whatsapp group in this chapter
					  </label>
					</div>


					<button type="submit" class="btn btn-blue p-2 w-100 mt-3">CREATE</button>

				</form>
				

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

	#content {
	  font-size: 16px;
	  font-weight: normal;
	}

</style>


<script>
	
	import TrainingService from '@/shared/services/TrainingService'

	export default
	{

		data() {
			return {
				chapter: {
					title: null,
					video: null,
					content: null,
					show_link_whatsapp: false,
					training_section_id: null
				},

				loadingVideo: false
			}
		},


		mounted() {
			this.initEditor()
		},


		methods: {

			initComponent(section_id, title) 
			{
				this.chapter.training_section_id = section_id

				$('.component-active').removeClass('component-active')
				$('#create-chapter').addClass('component-active')

				$('#training-subtitle').text(title+' / '+'Create chapter')
			},


			selecVideo() {
    		$('#video').click()
    	},


    	async uploadVideo()
			{
				this.loadingVideo = true

    		const form = new FormData()
    		form.append('video', document.getElementById('video').files[0])

    		const resp = await TrainingService.uploadVideo(form)

    		if(resp.data == 'EXT_INVALIDA')
    			SwalMixin('The file must have an .mp4 extension', 'error')
    		else
    		{
    			this.chapter.video = resp.data
    			document.getElementById('video').value = ''
    			this.loadingVideo = false

    			SwalMixin('Video uploaded', 'success')
    		}
			},


			initEditor()
			{
				let options = {

				  modules: {
				    toolbar: [
				    	['bold', 'italic', 'underline', 'strike'],  
						  [{ 'indent': '-1'}, { 'indent': '+1' }],                   

						  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

						  [{ 'color': [] }, { 'background': [] }], 
						  [{ 'align': [] }],

						  ['clean'] 
				    ]
				  },

				  theme: 'snow'
				};

				let editor = new Quill('#content', options);
			},


			async create()
			{
				$('#chapter-create-form').validate({
		      rules: {
		        title: { required:true, description:true }
		      }
		    })


				if($('#chapter-create-form').valid())
				{

					if(this.chapter.video != null)
					{

						this.chapter.content = $('#content .ql-editor').html()

						const resp = await TrainingService.createChapter(this.chapter)

						if(resp.data == 'OK')
						{
							SwalMixin('Chapter created', 'success')

							this.chapter.title = null
							this.chapter.video = null
							this.chapter.content = null
							this.chapter.show_link_whatsapp = false

							$('#content .ql-editor').html('')

							this.$emit('chapterCreated')
						}
						else
							SwalAlert('', 'An error has occurred, please try again', 'error')
					}

					else // video empty
					{
						SwalAlert('', 'You must upload a video', 'error')
					}
					
				}
				
			}

		}

	}

</script>