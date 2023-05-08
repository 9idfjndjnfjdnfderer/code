<template>
	<div>
		<layout>


			<template v-slot:sidebar>
		    
				<li class="nav-item">
					<router-link class="nav-link sid-link" to="/cms/setting/"><i class="fa fa-whatsapp"></i> WhatsApp Group</router-link>
				</li>

				<li class="nav-item">
					<router-link class="nav-link sid-link" to="/cms/setting/presentation-video"><i class="fa fa-video"></i> Presentation Video</router-link>
				</li>

				<li class="nav-item">
					<router-link class="nav-link sid-link" to="/cms/setting/change-password"><i class="fas fa-key"></i> Change Password</router-link>
				</li>

		  </template>


		  <template v-slot:title>Setting</template>
		  <template v-slot:subtitle>{{$route.name}}</template>


		  <template v-slot:main>
		    
		    <router-view/>

		  </template>


		</layout>
	</div>
</template>


<script>
	
	import EmployeeService from '@/shared/services/EmployeeService'

	import Layout from './../../layout/Layout'

	export default
	{

		components: {
			Layout
		},

		data() {
			return {
				drivers: []
			}
		},

		created() {
			this.get()
		},

		methods: {

			async get()
			{
				const resp = await EmployeeService.get()
				this.drivers = resp.data
			},

			async destroy(id)
			{
				SwalQuestion('', 'Are you sure you want to delete?', async resp =>
    		{
    			if(resp.isConfirmed)
    			{
    				const resp = await EmployeeService.destroy(id)

    				if(resp.data == 'OK')
    				{
    					SwalMixin('User deleted', 'success')
    					this.get()
    				}
    				else
    					SwalMixin('An error has occurred, please try again', 'error')
    			}
    		})
			}

		}

	}

</script>