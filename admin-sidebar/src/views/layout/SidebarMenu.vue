<template>
  <ura-sidebar-menu
    class="sidebar-menu"
    menuMode="vertical"
    :isCollapse="sidebarCollapse"
    :menuList="sidebarMenuList"
    :menuActive="sidebarMenuActiveName"
    :menuEvent="menuEvent">
  </ura-sidebar-menu>
</template>

<script>
import UraSidebarMenu from '@/components/Layout/Menu.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'NavMenu',
  data () {
    return {

    }
  },
  components: {UraSidebarMenu},
  computed: {
    ...mapGetters([
      'sidebarMenuList',
      'sidebarCollapse'
    ]),
    sidebarMenuActiveName: {
      get () {
        return this.$store.state.menu.sidebarMenuActiveName
      },
      set (name) {
        this.$store.dispatch('updateSidebarMenuActiveName', name)
      }
    }
  },
  watch: {
    $route: 'routerHandler'
  },
  methods: {
    menuEvent (path, router) {
      const routeName = path
      if (/\S/.test(routeName)) {
        this.$router.push({ name: routeName, query: { s: Date.now() }, params: { s: Date.now() } }, to => {
          to.matched && to.matched.length === 0 && this.$router.push({ path: '/404' })
        })
      }
    },
    routerHandler (route) {
      this.sidebarMenuActiveName = `${route.name}`
    }
  },
}
</script>

<style scoped>

</style>
