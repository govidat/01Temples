import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store.js';

new Vue({
  el: '#app',
  store,
  // created() {
  //  this.$store.dispatch('initStore')
  // },
  render: h => h(App)
})
