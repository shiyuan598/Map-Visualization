// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/router'
import store from './store/store'
import i18n from './lang/i18n'
import constConfig from './common/constConfig'

Vue.use(i18n)

Vue.config.productionTip = false
Vue.prototype.$constConfig = constConfig
axios.get('./static/config.json').then((result) => {
  Vue.prototype.$baseConfig = result.data

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    i18n,
    store,
    router,
    components: { App },
    template: '<App/>'
  })
}).catch((error) => {
  console.log('get config error...' + error)
})
