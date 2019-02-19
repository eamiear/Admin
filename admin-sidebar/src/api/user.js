import request from '@/common/ajax'

const UserAPI = {
  getUserInfo (uid) {
    return request.post({
      url: 'userinfo',
      reqMethod: 'account.userdata.getUserByUid',
      params: {uid}
    })
  },
  fetchUserList (params = {}) {
    return request.post({
      reqMethod: 'account.userdata.getUserList',
      params
    })
  },
  createUser (params) {
    return request.post({
      reqMethod: 'account.reg.doReg',
      params
    })
  },
  enableUser (uid) {
    return request.post({
      reqMethod: 'account.user.service.unDisableUser',
      params: {uid}
    })
  },
  disableUser (uid) {
    return request.post({
      reqMethod: 'account.user.service.disableUser',
      params: {uid}
    })
  }
}
export default UserAPI
