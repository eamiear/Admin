import { SET_MENU_NAV_LIST, UPDATE_MENU_NAV_ACTIVE_NAME } from '../mutation-types'

// import Storage from '@/common/cache'
// import SysMenuAPI from '@/api/menu'
import { operatorMenus, merchantMenus } from '@/router/menu'
import store from '@/store'

const menu = {
  state: {
    menuNavActiveName: '',
    navbarMenus: []
  },
  mutations: {
    [SET_MENU_NAV_LIST] (state, navbarMenus) {
      state.navbarMenus = navbarMenus
    },
    [UPDATE_MENU_NAV_ACTIVE_NAME] (state, menuNavActiveName) {
      state.menuNavActiveName = menuNavActiveName
    }
  },
  actions: {
    generateSidebarMenu ({ commit }) {
      return new Promise(resolve => {
        store.dispatch('getUserInfo').then(userInfo => {
          commit('SET_MENU_NAV_LIST', userInfo.type === 1 ? merchantMenus : operatorMenus)
          resolve(userInfo)
        }).catch(() => {
          commit('SET_MENU_NAV_LIST', [])
        })
      })
    },
    updateMenuNavActiveName ({ commit }, activeName) {
      commit('UPDATE_MENU_NAV_ACTIVE_NAME', activeName)
    }
  }
}

export default menu
