<template>
	<div>
		<layout>

			<template v-slot:sidebar>
		    
				<li class="nav-item" v-for="sec in sections">
					

					<!-- link section -->
					<a :href="domain+'/#/cms/'" class="nav-link">


						<span @click="$refs.EditSection.getSection(sec.id)" v-if="user.rol == 'a'" class="sid-link">{{ sec.title }}</span>

						<span v-else class="sid-link">{{ sec.title }}</span>


						<span 
							data-bs-toggle="collapse" 
							:data-bs-target="'#section-chapters-'+sec.id" 
							style="float:right;font-size: 20px;margin-top: -5px;"
							@click="expandSubmenu($event)"
						>
							<i class="fas fa-arrow-circle-down"></i>
						</span>
						
					</a>


					<!-- chapters -->
					<div class="collapse ps-3" :id="'section-chapters-'+sec.id">
	          <ul class="nav flex-column">
	            <li class="nav-item" v-for="chapter in sec.chapters">
	            	<a :href="domain+'/#/cms/'" class="nav-link sid-link" @click="$refs.ShowChapter.getChapter(chapter.id, sec.title)">

	            		{{ chapter.title }}

	            	</a>
	            </li>
	          </ul>

	          <div class="text-center mt-4">

            	<button class="btn btn-sm btn-orange sid-link mb-2" @click="$refs.CreateChapter.initComponent(sec.id, sec.title)" v-if="user.rol == 'a'"><i class="fa fa-plus"></i> Add Chapter</button>

            </div>

	        </div>


				</li>


				<div class="text-center mt-4">
					<button class="btn btn-sm btn-orange sid-link" @click="$refs.CreateSection.initComponent()" v-if="user.rol == 'a'"><i class="fa fa-plus"></i> Add Section</button>
				</div>


		  </template>


		  <template v-slot:title>Training Program</template>
		  <template v-slot:subtitle><span id="training-subtitle"></span></template>


		  <template v-slot:main>


		  	<!-- create section -->
		  	<div id="create-section" style="display:none">
		  		<CreateSection @sectionCreated="getSections()" ref="CreateSection" />
		  	</div>
		  	

		  	<!-- edit section -->
		  	<div id="edit-section" style="display: none">
		  		<EditSection @sectionUpdated="getSections()" @sectionDeleted="init()" ref="EditSection" />
		  	</div>


		  	<!-- create chapter -->
		  	<div id="create-chapter" style="display: none">
		  		<CreateChapter @chapterCreated="getSections()" ref="CreateChapter" />
		  	</div>


		  	<!-- edit chapter -->
		  	<div id="edit-chapter" style="display: none">
		  		<EditChapter @chapterUpdated="getSections()" ref="EditChapter" />
		  	</div>


		  	<!-- show chapter -->
		  	<div id="show-chapter" style="display: none">
		  		<ShowChapter ref="ShowChapter" @chapterDeleted="init()" @editChapter="editChapter($event)" />
		  	</div>


		  </template>


		</layout>
	</div>
</template>


<style>

	.component-active {
		display: block !important;
	}

</style>


<script>
	
	import Layout from './../../layout/Layout'

	import TrainingService from '@/shared/services/TrainingService'
	import UserService from '@/shared/services/UserService'

	import CreateSection from './components/CreateSection'
	import EditSection from './components/EditSection'

	import CreateChapter from './components/CreateChapter'
	import EditChapter from './components/EditChapter'
	import ShowChapter from './components/ShowChapter'


	export default
	{

		components: {
			Layout,
			CreateSection,
			EditSection,
			CreateChapter,
			EditChapter,
			ShowChapter
		},

		data() {
			return {
				sections: [],

				user: {
					rol: null
				}
			}
		},


		created() {
			this.getUser()
		},


		mounted() {
			this.init()
		},


		methods: {

			async init()
			{
				const resp = await TrainingService.get()
				this.sections = resp.data


				if(this.sections.length > 0)
				{
					if(this.sections[0].chapters.length > 0) // show first chapter
					{
						this.$refs.ShowChapter.getChapter(
							this.sections[0].chapters[0].id, 
							this.sections[0].title
						)
					}
					else // create first chapter
					{
						this.$refs.CreateChapter.initComponent(
							this.sections[0].id, 
							this.sections[0].title
						)
					}
				}
				else // create first section
				{
					$('.component-active').removeClass('component-active')
					$('#create-section').addClass('component-active')

					$('#training-subtitle').text('Create first section')
				}
			},


			async getSections()
			{
				const resp = await TrainingService.get()
				this.sections = resp.data
			},


			expandSubmenu(e)
			{
				let section = $(e.target)

				if(!section.hasClass('active')) // expand
				{
					section.addClass('active')
					section.animate({'rotate':'180deg'})
				}
				else // collapse
				{
					section.removeClass('active')
					section.animate({'rotate':'0deg'})
				}
			},


			editChapter(event) {
				this.$refs.EditChapter.getChapter(event)
			},


			async getUser()
			{
				const resp = await UserService.getUser()
				this.user.rol = resp.data.rol
			}

		}

	}

</script>