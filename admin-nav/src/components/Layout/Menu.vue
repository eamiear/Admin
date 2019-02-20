<template>
  <el-menu
    class="sidebar-menu"
    :mode="menuMode"
    unique-opened
    :router="false"
    :default-active="menuActive">
    <sub-menu
      v-for="menu in menuList"
      :key="menu.id"
      :menus='menu'
      :menuEvent="menuEvent">
    </sub-menu>
  </el-menu>
</template>

<script>
import SubMenu from './SubMenu.vue'
export default {
  name: 'UraMenu',
  props: {
    menuMode: {
      type: String,
      default: 'horizontal'
    },
    menuList: {
      type: Array,
      default: () => []
    },
    menuActive: {
      type: String,
      default: ''
    },
    menuEvent: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
    }
  },
  components: { SubMenu },
}
</script>
