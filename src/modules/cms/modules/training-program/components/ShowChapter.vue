<template>
	<div>
		
		<div class="row">
			<div class="offset-lg-1 col-lg-10" v-if="chapter.id != null">


				<!-- options -->
				<div class="text-end">
					<button class="btn btn-sm btn-blue me-4" @click="destroyChapter()" v-if="user.rol == 'a'" id="chapter-delete-btn">DELETE CHAPTER</button>

					<button class="btn btn-sm btn-blue" @click="editChapter()" v-if="user.rol == 'a'">EDIT CHAPTER</button>
				</div>


				<h2 class="text-center text-blue mt-5 mb-5">{{chapter.title}}</h2>

				<video :src="backend+'../'+chapter.video" controls width="100%" id="video-player"></video>

				<div class="mt-5 mb-4" id="show-chapter-content" v-html="chapter.content"></div>


				<!-- show link whatsapp -->
				<div class="mt-5 mb-4" v-if="chapter.show_link_whatsapp == 1">
					
					<div class="row">
						<div class="offset-lg-2 col-lg-8">
							<a 
								class="btn w-100 p-3" 
								id="chapter-link_whatsapp_group" 
								target="_blank" 
								:href="link_whatsapp_group"
							>
								<i class="fa fa-whatsapp"></i> Join the WhatsApp Group
							</a>
						</div>
					</div>

				</div>

				
			</div>
		</div>

	</div>
</template>


<style>
	
	#show-chapter-content {
		font-size: 16px;
	  font-weight: normal;
	}

	#chapter-link_whatsapp_group {
		background: #009d43;
		color: white;
		font-size: calc(1rem + .6vw);
		border-radius: 40px;
	}

	#chapter-link_whatsapp_group i {
		font-size: calc(1.3rem + .6vw);
	}

	#chapter-link_whatsapp_group:hover {
		background: #32373c;
	}

	@media(max-width: 320px) {

		#chapter-delete-btn {
			margin-right: 0px !important;
			margin-bottom: 5px;
		}

	}

</style>


<script>
	
	import TrainingService from '@/shared/services/TrainingService'
	import SettingService from '@/shared/services/SettingService'
	import UserService from '@/shared/services/UserService'


	export default
	{

		data() {
			return {
				chapter: {
					id: null,
					title: null,
					video: null,
					content: null,
					show_link_whatsapp: null
				},

				link_whatsapp_group: null,

				user: {
					rol: null
				}
			}
		},


		created() {
			this.getUser()
		},


		methods: {

			async getChapter(id, sec_title)
			{
				const resp = await TrainingService.getChapter(id)

				this.chapter.id = resp.data.id
				this.chapter.title = resp.data.title
				this.chapter.video = resp.data.video
				this.chapter.content = resp.data.content
				this.chapter.show_link_whatsapp = resp.data.show_link_whatsapp


				if(this.chapter.show_link_whatsapp)
				{
					const setting = await SettingService.get()
					this.link_whatsapp_group = setting.data.link_whatsapp_group
				}

				
				$('.component-active').removeClass('component-active')
				$('#show-chapter').addClass('component-active')

				$('#training-subtitle').text(sec_title+' / '+this.chapter.title)
			},


			destroyChapter()
			{
				SwalQuestion('', 'Are you sure you want to delete?', async resp =>
    		{
    			if(resp.isConfirmed)
    			{
    				const resp = await TrainingService.destroyChapter(this.chapter.id)

    				if(resp.data == 'OK')
    				{
    					SwalMixin('Chapter deleted', 'success')
    					this.$emit('chapterDeleted')
    				}
    				else
    					SwalMixin('An error has occurred, please try again', 'error')
    			}
    		})
			},


			editChapter() {
				this.$emit('editChapter', this.chapter.id)
			},


			async getUser()
			{
				const resp = await UserService.getUser()
				this.user.rol = resp.data.rol
			}

		}

	}

</script>