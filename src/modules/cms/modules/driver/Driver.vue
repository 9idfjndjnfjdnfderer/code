<template>
	<div>
		<layout>


			<template v-slot:sidebar>
		    
				<form class="text-white ps-4 pe-4" id="drivers-coupons-form" @submit.prevent="updateCoupons()">
					
					<div class="form-group">
						<label class="form-label">Coupons</label>
						<input class="form-control border-none" name="drivers_coupons" v-model="setting.drivers_coupons">
					</div>

					<button type="submit" class="btn btn-orange w-100 mt-2 sid-link">UPDATE</button>

				</form>

		  </template>


		  <template v-slot:title>Drivers</template>
		  <template v-slot:subtitle>Drivers</template>


		  <template v-slot:main>
		    
		    <div class="table-responsive">
    	  	<table class="table table-bordered mt-3">
    				<thead>
    					<tr>
    						<td>Full name</td>
    						<td>City</td>
    						<td>Phone</td>
    						<td>Email</td>
    						<td>Options</td>
    					</tr>
    				</thead>

    				<tbody>
    					<tr v-for="item in drivers">
    						<td>{{item.full_name}}</td>
    						<td>{{item.city}}</td>
    						<td>{{item.phone}}</td>
    						<td>{{item.user.email}}</td>
    						<td>
    							<button class="btn btn-secondary btn-sm" @click="destroy(item.id)"><i class="fa fa-trash"></i></button>
    						</td>
    					</tr>
    				</tbody>
    			</table>
		    </div>

		  </template>


		</layout>
	</div>
</template>


<script>
	
	import EmployeeService from '@/shared/services/EmployeeService'
	import SettingService from '@/shared/services/SettingService'

	import Layout from './../../layout/Layout'

	export default
	{

		components: {
			Layout
		},

		data() {
			return {
				drivers: [],

				setting: {
					drivers_coupons: null
				}
			}
		},

		created() {
			this.getEmployees()
			this.getCoupons()
		},

		methods: {

			async getEmployees()
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
			},

			async getCoupons()
			{
				const resp = await SettingService.get()
				this.setting.drivers_coupons = resp.data.drivers_coupons
			},

			async updateCoupons()
			{
				$('#drivers-coupons-form').validate({
		      rules: {
		        drivers_coupons: { required:true, integer:true }
		      }
		    })


				if($('#drivers-coupons-form').valid())
				{
					const resp = await SettingService.updateCoupons(this.setting)

					if(resp.data == 'OK')
						SwalAlert('', 'Updated coupons', 'success')
					else
						SwalAlert('', 'An error has occurred, please try again', 'error')
				}
			}

		}

	}

</script>