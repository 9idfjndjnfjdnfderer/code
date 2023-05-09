<template>
	<div>
		
		<div class="row">
			<div class="offset-lg-1 col-lg-10">
				

				<form @submit.prevent="update()" id="chapter-update-form" v-if="chapter.title != null">
					
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
						<input type="file" name="video" id="edit_video" hidden @change="uploadVideo()">


					</div>


					<div class="form-group mt-3">
						<label class="form-label">Content</label>

						<div id="content_edit" style="min-height: 300px;"></div>

					</div>


					<div class="form-check mt-3">
					  <input class="form-check-input" type="checkbox" name="link_whatsapp_group" id="edit_link_whatsapp_group" v-model="chapter.show_link_whatsapp">
					  <label class="form-check-label" for="edit_link_whatsapp_group">
					  	Show link to whatsapp group in this chapter
					  </label>
					</div>


					<button type="submit" class="btn btn-blue p-2 w-100 mt-3">UPDATE</button>

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

	#content_edit {
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
					id: null,
					title: null,
					video: null,
					content: null,
					show_link_whatsapp: false
				},

				loadingVideo: false
			}
		},


		mounted() {
			this.initEditor()
		},


		methods: {

			selecVideo() {
    		$('#edit_video').click()
    	},


    	async uploadVideo()
			{
				this.loadingVideo = true

    		const form = new FormData()
    		form.append('video', document.getElementById('edit_video').files[0])

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

				let editor_edit = new Quill('#content_edit', options);
			},


			async getChapter(id)
			{
				const resp = await TrainingService.getChapter(id)

				this.chapter.id = resp.data.id
				this.chapter.title = resp.data.title
				this.chapter.video = resp.data.video
				this.chapter.content = resp.data.content
				this.chapter.show_link_whatsapp = (resp.data.show_link_whatsapp == 1) ? true : false


				setTimeout(()=> {
					$('#content_edit .ql-editor').html(this.chapter.content)
				}, 500)


				$('.component-active').removeClass('component-active')
				$('#edit-chapter').addClass('component-active')
			},


			async update()
			{
				if(this.chapter.video != null)
				{
					this.chapter.content = $('#content_edit .ql-editor').html()

					const resp = await TrainingService.updateChapter(this.chapter)

					if(resp.data == 'OK')
					{
						SwalMixin('Chapter updated', 'success')

						this.$emit('chapterUpdated')
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

</script>