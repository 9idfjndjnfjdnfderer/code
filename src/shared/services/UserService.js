import Api from '@/shared/services/Api'


export default 
{

	login(data) {
		return Api().post('login', data)
	},

	resendEmail(data) {
		return Api().post('resend-email', data)
	},

	activateAccount(data) {
		return Api().post('activate-account', data)
	},

	forgotPassword(data) {
		return Api().post('forgot-password', data)
	},

	changePasswordAuth(data) {
		return Api().post('change-password-auth', data)
	},

	changePassword(data) 
	{
		data.token = localStorage.getItem('token')
		return Api().post('change-password', data)
	},

	getUser() {
		let data = {
			token: localStorage.getItem('token')
		}

		return Api().post('get-user', data)
	}

}