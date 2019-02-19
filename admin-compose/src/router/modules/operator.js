/*
 * @Author: eamiear
 * @Date: 2019-02-06 20:47:55
 * @Last Modified by: eamiear
 * @Last Modified time: 2019-02-10 15:09:04
 */

// 商铺
const shops = [{
  name: '/operator/shops/projectList.html',
  path: '/operator/shops/projectList.html',
  desc: '项目列表',
  component: () => import('views/operator/shops/projectList.vue'),
  isShow: true
}, {
  name: '/operator/shops/list.html',
  path: '/operator/shops/list.html',
  desc: '商铺列表',
  component: () => import('views/operator/shops/list.vue'),
  isShow: true
}, {
  name: '/operator/shops/publish.html',
  path: '/operator/shops/publish.html',
  desc: '发布商铺',
  component: () => import('views/operator/shops/publish.vue'),
  isShow: true
}, {
  name: '/operator/shops/detail.html',
  path: '/operator/shops/detail.html',
  desc: '详情页',
  component: () => import('views/operator/shops/detail.vue'),
  isShow: true
}]

// 个人中心
const usercenter = [{
  name: '/operator/usercenter/password.html',
  path: '/operator/usercenter/password.html',
  desc: '设置密码',
  component: () => import('views/operator/usercenter/password.vue')
}]

export default [
  ...shops,
  ...usercenter
]
