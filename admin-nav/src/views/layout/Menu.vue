<template>
  <el-menu
    class="sidebar-menu"
    :mode="menuMode"
    unique-opened
    :router="false"
    :default-active="menuNavActiveName">
    <sub-menu
      v-for="menu in navbarMenus"
      :key="menu.id"
      :menus='menu'>
    </sub-menu>
  </el-menu>
</template>

<script>
import SubMenu from './SubMenu.vue'
import { mapGetters } from 'vuex'
export default {
  props: {
    menuMode: {
      type: String,
      default: 'horizontal'
    }
  },
  data () {
    return {
    }
  },
  components: { SubMenu },
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
  },
  mounted () {
  },
  methods: {
    routerHandler (route) {
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
