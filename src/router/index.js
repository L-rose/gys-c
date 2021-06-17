/*
 * @Author: your name
 * @Date: 2021-06-07 10:08:18
 * @LastEditTime: 2021-06-15 11:19:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gsy-client\src\router\index.js
 */
/*
 * 使用懒加载进行优化
 */
import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Favorable from '../views/Favorable'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/favorable',
      component: Favorable,
    },
  ],

  mode: 'history'
})
