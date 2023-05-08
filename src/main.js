import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.prototype.backend = (process.env.NODE_ENV === 'production') ? 'http://easymotoyatrainingprogram.com/backend/api/' : 'http://localhost:80/motoya/backend/api/'
Vue.prototype.domain = (process.env.NODE_ENV === 'production') ? 'http://easymotoyatrainingprogram.com' : 'http://localhost:3000'

Vue.config.productionTip = false

// global functions

Vue.prototype.dateFormat = function(date)
{
  let d = new Date(date)

  let month = (d.getMonth()+1).toString().padStart(2,'0')
  let day = d.getDate().toString().padStart(2,'0')
  let year = d.getFullYear()

  return day + '/' + month + '/' + year
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
