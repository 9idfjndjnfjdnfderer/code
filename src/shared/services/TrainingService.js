import Api from '@/shared/services/Api'


export default 
{

	get() {
		return Api().get('training-get')
	},

	createSection(data) {
		return Api().post('training-create-section', data)
	},

	destroySection(id) {
		return Api().get('training-destroy-section?id='+id)
	},

	getSection(id) {
		return Api().get('training-get-section?id='+id)
	},

	updateSection(data) {
		return Api().post('training-update-section', data)
	},

	uploadVideo(data) {
		return Api().post('training-upload-video', data)
	},

	createChapter(data) {
		return Api().post('training-create-chapter', data)
	},

	getChapter(id) {
		return Api().get('training-get-chapter?id='+id)
	},

	updateChapter(data) {
		return Api().post('training-update-chapter', data)
	},

	destroyChapter(id) {
		return Api().get('training-destroy-chapter?id='+id)
	},

}