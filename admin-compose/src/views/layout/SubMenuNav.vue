<template>
  <el-submenu
    v-if="menus.children && menus.children.length > 0"
    :index="menus.path">
    <template slot="title">
      <span slot="title" class="el-menu-item-title">{{menus.name}}</span>
    </template>
    <sub-menu-nav
      v-for="item in menus.children"
      :key="item.id"
      :menus="item"></sub-menu-nav>
  </el-submenu>
  <el-menu-item
    :index="menus.path"
    v-else-if="(!menus.children || (menus.children && menus.children.length === 0))"
    @click="routerHandler(menus.path, $route)">
    <span slot="title" class="el-menu-item-title">{{menus.name}}</span>
  </el-menu-item>
</template>

<script>
import SubMenuNav from './SubMenuNav.vue'
export default {
  name: 'SubMenuNav',
  props: {
    menus: Object
  },
  components: { SubMenuNav },
  computed: {
  },
  methods: {
    routerHandler (path) {
      const routeName = path
      if (/\S/.test(routeName)) {
        this.$router.push({ name: routeName, query: { s: Date.now() }, params: { s: Date.now() } }, to => {
          to.matched && to.matched.length === 0 && this.$router.push({ path: '/404' })
        })
      }
    }
  }
}
</script>
