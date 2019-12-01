import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
    data() {
      return {
        testRootData: 'Hello world',
      }
    },
    methods: {
      printTestData(){
        console.log(this.testRootData)
      }
    },
  // axios,
  router,
  render: h => h(App)
}).$mount('#app')
