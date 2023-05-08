import Api from '@/shared/services/Api'


export default 
{

	notifyRegister(data) {
		return Api().post('notification-register', data)
	}

}