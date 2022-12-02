<template>
  <div class='bg-body_bg'>
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
  mounted() {
    if (window.innerWidth < 1280 && window.innerWidth > 767) {
      this.sidebarOpen = false
    }
    if (window.innerWidth < 768) {
      this.isMobile = true
    }
    const vm = this;
    window.addEventListener('resize', function () {
        vm.sidebarOpen = !(window.innerWidth < 1280 && window.innerWidth > 767)
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
</style>
