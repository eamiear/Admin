<template>
  <el-submenu
    v-if="menus.children && menus.children.length > 0"
    :index="timestamp">
    <template slot="title">
      <span slot="title" class="el-menu-item-title">{{menus.name}}</span>
    </template>
    <sub-menu
      v-for="item in menus.children"
      :key="item.id"
      :menus="item"></sub-menu>
  </el-submenu>
  <el-menu-item
    :index="timestamp"
    v-else-if="(!menus.children || (menus.children && menus.children.length === 0))"
    @click="menuEvent(menus.path, $route)">
    <span slot="title" class="el-menu-item-title">{{menus.name}}</span>
  </el-menu-item>
</template>

<script>
import SubMenu from './SubMenu.vue'
export default {
  name: 'SubMenu',
  props: {
    menus: Object,
    menuEvent: {
      type: Function,
      default: () => {}
    }
  },
  components: { SubMenu },
  computed: {
    timestamp () {
      return Date.now() + ''
    }
  },
  methods: {

  }
}
</script>
