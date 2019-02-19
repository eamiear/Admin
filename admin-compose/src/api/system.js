/*
 * @Author: eamiear
 * @Date: 2019-02-06 21:34:24
 * @Last Modified by: eamiear
 * @Last Modified time: 2019-02-10 17:33:01
 */

import request from '@/common/ajax'

import {CLIENT_TYPES, LOGIN_TYPES} from '@/common/constants'

const SystemAPI = {
  login (account, password, loginType = LOGIN_TYPES.LOGINNAME_PASS, sysId = CLIENT_TYPES.MERCHANTS) {
    return request.post({
      url: 'login',
      reqMethod: 'account.login.doLogin',
      params: {
        account,
        password,
        loginType,
        sysId
      }
    })
  },
  logout (accessToken) {
    return request.post({
      url: 'logout',
      reqMethod: 'account.operator.login.loginOut',
      params: {accessToken}
    })
  },
  reNewAcessToken (oldAccessToken) {
    return request.post({
      reqMethod: 'account.operator.login.renewToken',
      params: {accessToken: oldAccessToken}
    })
  },
  resetPassword (params) {
    return request.post({
      reqMethod: 'account.user.service.modifyLoginPassword',
      params
    })
  },
  // 获取七牛token
  getQiniuToken () {
    return request.post({
      reqMethod: 'common.upload.getUpToken'
    })
  },
  /**
   * 根据key获取七牛图片访问url
   * @param {String} key 七牛key
   */
  getReqUrlByQiniuKey (key) {
    return request.post({
      reqMethod: 'common.upload.getUrlByKey',
      params: {key}
    })
  }
}
export default SystemAPI
