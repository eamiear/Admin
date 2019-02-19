/*
 * @Author: eamiear
 * @Date: 2019-02-06 18:06:02
 * @Last Modified by: eamiear
 * @Last Modified time: 2019-02-10 15:52:31
 */

import common from './common'
import operator from './operator'
import merchants from './merchants'
const menuRoutes = {
  name: 'home',
  path: '/',
  desc: '首页',
  component: () => import('views/layout/Layout.vue'),
  redirect: { path: '/dashboard' },
  children: [{
    name: 'dashboard',
    path: '/dashboard',
    desc: '首页面板',
    component: () => import('views/dashboard/index.vue'),
    // redirect: { path: '/operator/shops/projectList.html' }
  },
  ...operator,
  ...merchants,
  ...common
  ]
}

export default [
  {
    name: 'login',
    path: '/login',
    desc: '登录页',
    component: () => import('views/login/index.vue')
  },
  menuRoutes,
  {
    path: '*',
    redirect: '/404'
  }
]
