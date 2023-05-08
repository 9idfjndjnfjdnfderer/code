import Api from '@/shared/services/Api'


export default 
{

	create(data) {
		return Api().post('employee-create', data)
	},

	get() {
		return Api().get('employee-get')
	},

	destroy(id) {
		return Api().get('employee-destroy?id='+id)
	}

}