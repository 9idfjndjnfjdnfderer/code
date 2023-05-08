import axios from 'axios'
import Vue from 'vue'


export default() => {
	return axios.create({
		baseURL: Vue.prototype.backend,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
}