<template>
	<div>
		
		<div class="row">
			<div class="offset-lg-3 col-lg-6">
				

				<div class="text-end">
					<button class="btn btn-sm btn-blue" @click="destroySection()">DELETE SECTION</button>
				</div>

				<form @submit.prevent="update()" id="section-update-form">
					
					<div class="form-group">
						<label class="form-label">Title</label>
						<input class="form-control" name="title" v-model="section.title">
					</div>

					<button type="submit" class="btn btn-blue p-2 w-100 mt-3">UPDATE</button>

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
					id: null,
					title: null
				}
			}
		},

		methods: {

			async getSection(id)
			{
				const resp = await TrainingService.getSection(id)
				this.section.id = resp.data.id
				this.section.title = resp.data.title

				$('.component-active').removeClass('component-active')
				$('#edit-section').addClass('component-active')
			},

			async update()
			{
				$('#section-update-form').validate({
		      rules: {
		        title: { required:true, description:true }
		      }
		    })


				if($('#section-update-form').valid())
				{
					const resp = await TrainingService.updateSection(this.section)

					if(resp.data == 'OK')
					{
						SwalMixin('Section updated', 'success')
						this.$emit('sectionUpdated')
					}
					else
						SwalAlert('', 'An error has occurred, please try again', 'error')
				}
				
			},


			destroySection()
			{
				SwalQuestion('', 'Are you sure you want to delete?', async resp =>
    		{
    			if(resp.isConfirmed)
    			{
    				const resp = await TrainingService.destroySection(this.section.id)

    				if(resp.data == 'OK')
    				{
    					SwalMixin('Section deleted', 'success')
    					this.$emit('sectionDeleted')
    				}
    				else
    					SwalMixin('An error has occurred, please try again', 'error')
    			}
    		})
			}


		}

	}

</script>