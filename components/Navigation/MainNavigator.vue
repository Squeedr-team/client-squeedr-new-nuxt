<template>
  <div class='bg-body_bg'>
    <div
      v-show='isMobile && !sidebarOpen' id='body-overlay'
      @click='sidebarOpen=true'
    >
    </div>
    <sidebar
      :class="{'sidebar-closed':!sidebarOpen}"
      :open='sidebarOpen'
      :is-mobile='isMobile'
    />
    <div id='main' :class="{'sidebar-closed':!sidebarOpen}">
      <appbar :open='sidebarOpen' :is-mobile='isMobile' @change='sidebarOpen=!sidebarOpen'></appbar>
      <div class='p-2'>
        <slot />
      </div>

    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'

export default {
  name: 'MainNavigator',
  components: { Sidebar },
  data() {
    return {
      sidebarOpen: true,
      isMobile: false
    }
  },
  watch: {
    $route(to, from) {
      if (this.isMobile && to.path !== from.path) {
        this.sidebarOpen = true
      }
    }
  },

  mounted() {
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width
    if (width < 1280 && width > 767) {
      this.sidebarOpen = false
    }
    if (width < 768) {
      this.isMobile = true
    }
    const vm = this
    window.addEventListener('resize', function() {
      vm.sidebarOpen = !(width < 1280 && width > 767)
      if (width < 768) {
        this.isMobile = true
      }
    })
  }
}
</script>

<style scoped lang='scss'>
#main {
  min-height: 100vh;
  @media (min-width: 768px) {
    margin-left: 345px;
    transition: margin-left 0.3s;

    &.sidebar-closed {
      margin-left: 80px;
      transition: margin-left 0.3s;
    }
  }
  @media (max-width: 767px) {
    margin-left: 0 !important;
    transition: unset !important;
  }
}

#body-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  top: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  transition: ease-in-out 0.3s;
}
</style>
