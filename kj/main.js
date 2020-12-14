import Vue from 'vue'
import App from './App'

App.mpType = 'app'
Vue.config.productionTip = false

//=>ui
//https://app.mockplus.cn/s/T2ZxNwEdoe

const app = new Vue({
	...App,
})
app.$mount(); 

