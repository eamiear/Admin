<template>
  <el-menu
    class="sidebar-menu"
    mode="horizontal"
    unique-opened
    :router="false"
    :default-active="menuNavActiveName">
    <sub-menu-nav
      v-for="menu in navbarMenus"
      :key="menu.id"
      :menus='menu'>
    </sub-menu-nav>
  </el-menu>
</template>

<script>
import SubMenuNav from './SubMenuNav.vue'
import { mapGetters } from 'vuex'
// import isEmpty from 'lodash/isEmpty'
// import { hasPermission } from '@/common/utils'
export default {
  data () {
    return {
    }
  },
  components: { SubMenuNav },
  computed: {
    ...mapGetters([
      'navbarMenus'
    ]),
    menuNavActiveName: {
      get () {
        return this.$store.state.menu.menuNavActiveName
      },
      set (name) {
        this.$store.dispatch('updateMenuNavActiveName', name)
      }
    }
  },
  watch: {
    $route: 'routerHandler'
  },
  created () {
    // this.$store.dispatch('generateSidebarMenu').then(() => {
    //   this.routerHandler(this.$route)
    // })
  },
  mounted () {
  },
  methods: {
    routerHandler (route) {
      // if (!hasPermission(route.name, this.navbarMenus)) {
      //   return this.$router.push({ path: '/401' })
      // }
      // if (route.meta && route.meta.isTab) {
      //   let tab = this.tabsNavList.filter(tabItem => tabItem.name === route.name)[0]
      //   if (isEmpty(tab)) {
      //     const menuNav = this.getMenuNavByRouteName(route.name, this.navbarMenus)
      //     if (!isEmpty(menuNav)) {
      //       tab = {
      //         id: menuNav.id,
      //         name: route.name,
      //         title: menuNav.name,
      //         type: route.meta.type,
      //         path: menuNav.path,
      //         query: route.query
      //       }
      //       this.$store.dispatch('addTabsNavList', tab)
      //     } else {
      //       return console.error('没有可用tab标签页!')
      //     }
      //   }
      //   this.menuNavActiveName = `${tab.id}`
      //   this.$store.dispatch('updateTabsActiveName', `${route.name}`)
      // }
      this.menuNavActiveName = `${route.name}`
    },
    getMenuNavByRouteName (routeName, menuNavList) {
      let temp = []
      for (let i = 0; i < menuNavList.length; i++) {
        if (menuNavList[i].children && menuNavList[i].children.length >= 1) {
          temp = temp.concat(menuNavList[i].children)
        } else if (menuNavList[i].path === routeName) {
          return menuNavList[i]
        }
      }
      return temp.length >= 1 ? this.getMenuNavByRouteName(routeName, temp) : []
    }
  }
}
</script>
