/*
 * @Author: eamiear
 * @Date: 2019-02-06 21:24:22
 * @Last Modified by: eamiear
 * @Last Modified time: 2019-02-19 11:27:53
 */

export default [
  {
    name: '/merchant/store/list.html',
    path: '/merchant/store/list.html',
    desc: '商铺库',
    component: () => import('views/merchant/store/list.vue')
  }, {
    name: '/merchant/brand/list.html',
    path: '/merchant/brand/list.html',
    desc: '品牌库',
    component: () => import('views/merchant/brand/list.vue')
  }, {
    name: '/merchant/brand/publish.html',
    path: '/merchant/brand/publish.html',
    desc: '发布品牌',
    component: () => import('views/merchant/brand/publish.vue')
  }
]
