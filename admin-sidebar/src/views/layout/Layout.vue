<template>
  <section class="app-wrapper">
    <aside class="app-sidebar">
      <brand></brand>
      <sidebar-menu></sidebar-menu>
    </aside>
    <section class="app-body">
      <navbar class="app-header"></navbar>
      <article class="app-main"  v-if="isTabView" :style="appMainStyles">
        <keep-alive v-if="isKeepAlive">
           <router-view/>
        </keep-alive>
         <router-view v-else/>
      </article>
      <tabs-view v-else/>
    </section>

  </section>
</template>

<script>
import Brand from '@/views/layout/Brand.vue'
import SidebarMenu from '@/views/layout/SidebarMenu.vue'
import Navbar from '@/views/layout/Navbar.vue'
import TabsView from '@/components/Layout/TabsView.vue'
import {
  mapGetters
} from 'vuex'

export default {
  name: 'layout',
  components: {
    Brand,
    SidebarMenu,
    Navbar,
    TabsView
  },
  created () {
    // this.getUserInfo()
  },
  mounted () {
    this.resetDocumentClientHeight()
    window.onresize = () => {
      this.resetDocumentClientHeight()
    }
  },
  computed: {
    ...mapGetters([
      'documentClientHeight'
    ]),
    appWrapperStyles () {
      return {}
    },
    appBodyStyles () {
      return {}
    },
    appMainStyles () {
      let height = this.documentClientHeight
      height -= 50 // navbar
      return [{
        'minHeight': `${height}px`
      }, {
        'height': `${height}px`
      }]
    },
    isTabView () {
      return (this.$route.meta && this.$route.meta !== false) || !this.$route.meta
    },
    isKeepAlive () {
      return this.$route.meta && this.$route.isKeepAlive
    }
  },
  methods: {
    resetDocumentClientHeight () {
      this.$store.dispatch('updateDocumentClientHeight', document.documentElement.clientHeight)
    },
    getUserInfo () {
      this.$store.dispatch('getUserInfo')
    }
  }
}
</script>
