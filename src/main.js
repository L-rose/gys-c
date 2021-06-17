/*
 * @Author: your name
 * @Date: 2021-06-07 10:08:18
 * @LastEditTime: 2021-06-10 10:58:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gsy-client\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.qs = qs


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
