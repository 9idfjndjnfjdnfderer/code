<template>
	<div>
		
		<div class="row">
			<div class="offset-lg-3 col-lg-6">
				

				<form @submit.prevent="create()" id="section-create-form">
					
					<div class="form-group">
						<label class="form-label">Title</label>
						<input class="form-control" name="title" v-model="section.title">
					</div>

					<button type="submit" class="btn btn-blue p-2 w-100 mt-3">CREATE</button>

				</form>
				

			</div>
		</div>

	</div>
</template>


<script>
	
	import TrainingService from '@/shared/services/TrainingService'

	export default
	{

		data() {
			return {
				section: {
					title: null
				}
			}
		},

		methods: {


			initComponent()
			{
				$('.component-active').removeClass('component-active')
				$('#create-section').addClass('component-active')

				$('#training-subtitle').text('Create section')
			},


			async create()
			{
				$('#section-create-form').validate({
		      rules: {
		        title: { required:true, description:true }
		      }
		    })


				if($('#section-create-form').valid())
				{
					const resp = await TrainingService.createSection(this.section)

					if(resp.data == 'OK')
					{
						SwalMixin('Section created', 'success')

						this.section.title = null

						this.$emit('sectionCreated')
					}
					else
						SwalAlert('', 'An error has occurred, please try again', 'error')
				}
				
			}

		}

	}

</script>