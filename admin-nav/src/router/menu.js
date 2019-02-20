export const operatorMenus = [
  {
    name: '发布商铺',
    path: '/operator/shops/projectList.html'
  }, {
    name: '个人中心',
    path: '/operator/usercenter/password.html'
  }, {
    name: '配置信息',
    children: [
      {
        name: '系统配置',
        path: '/operator/usercenter/password.html'
      }
    ]
  }
]

export const merchantMenus = [
  {
    name: '商铺库',
    path: '/merchant/store/list.html'
  }, {
    name: '品牌库',
    path: '/merchant/brand/list.html'
  }, {
    name: '发布品牌',
    path: '/merchant/brand/publish.html'
  }, {
    name: '个人中心',
    path: '/operator/usercenter/password.html'
  }
]

export const systemtMenus = [
  {
    name: '系统主题',
    path: '/system/theme.html'
  }, {
    name: '系统消息',
    path: '/system/message.html'
  }
]
