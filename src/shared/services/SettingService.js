import Api from '@/shared/services/Api'


export default 
{

	get() {
		return Api().get('setting-get')
	},

	updateWhatsAppGroup(data) {
		return Api().post('setting-update-whatsapp-group', data)
	},

	updateVideoPresentation(data) {
		return Api().post('setting-update-video-presentation', data)
	},

	updateCoupons(data) {
		return Api().post('setting-update-coupons', data)
	}

}