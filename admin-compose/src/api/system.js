/*
 * @Author: eamiear
 * @Date: 2019-02-06 21:34:24
 * @Last Modified by: eamiear
 * @Last Modified time: 2019-02-27 10:24:39
 */

import request from '@/common/fetch'


const SystemAPI = {
  login (account, password) {
    return request.post({
      url: 'login',
      params: {
        account,
        password
      }
    })
  },
  logout (accessToken) {
    return request.post({
      url: 'logout',
      params: {accessToken}
    })
  },
  reNewAcessToken (oldAccessToken) {
    return request.post({
      url: 'renewToken',
      params: {accessToken: oldAccessToken}
    })
  },
  resetPassword (params) {
    return request.post({
      url: 'resetPassword',
      params
    })
  },
  // 获取七牛token
  getQiniuToken () {
    return request.post({
      url: 'getQiniuToken'
    })
  },
  /**
   * 根据key获取七牛图片访问url
   * @param {String} key 七牛key
   */
  getReqUrlByQiniuKey (key) {
    return request.post({
      url: 'qiniu/url',
      params: {key}
    })
  },
  getSidebarMenus (uid) {
    return request.post({
      url: 'sys/menu',
      params: {uid}
    })
  },
  getNavMenus (uid) {
    return request.post({
      url: 'sys/nav',
      params: {uid}
    })
  },
  getSysMenus (uid) {
    return request.post({
      url: 'sys/setting',
      params: {uid}
    })
  }
}
export default SystemAPI
