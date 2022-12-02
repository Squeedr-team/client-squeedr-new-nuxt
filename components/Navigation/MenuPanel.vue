<template>
  <ul
    class='child-panel'
    :class="{'pop-panel':!open && !isMobile}"
  >
    <li
      v-for='(menu,idx) in childItem' :key='idx'
      :class="[isMainMenu?'menu-item':'sub-menu-item']">
      <template v-if='!menu.children'>
        <nuxt-link :to='{name:menu.pathName}'>
          {{ menu.name }}
        </nuxt-link>
      </template>
      <template v-else>
        <template v-if='open || isMobile'>
          <button
            :class="[opened===menu.id?'active':'',isMainMenu?'menu-item-btn':'sub-menu-item-btn']"
            @click="opened===menu.id?opened='':opened=menu.id">
            <font-awesome-icon v-if='menu.icon' :icon='menu.icon' class='w-6 text-xl'></font-awesome-icon><span class='menu-text'>{{ menu.name }}</span>
          </button>
          <expand>
            <MenuPanel
              v-show='opened===menu.id'
              :child-item='menu.children'
              :open='open'
              :class="isMainMenu?'main-child':''"
              :is-main-menu='false'
              :is-mobile='isMobile' />
          </expand>
        </template>
        <div v-if='!open && !isMobile'>
          <VMenu
            placement='right-start'
            :distance='14'
            :delay='{ show: 300, hide: 0 }'
          >
            <button :class="[opened===menu.id?'active':'',isMainMenu?'menu-item-btn':'sub-menu-item-btn']"
            >
              <font-awesome-icon v-if='menu.icon' :icon='menu.icon' class='w-10'></font-awesome-icon><span class='menu-text'>{{ menu.name }}</span>
            </button>

            <template #popper>
              <MenuPanel
                :child-item='menu.children'
                :open='open'
                :is-mobile='isMobile'
                :is-main-menu='false'
                class='m-3 w-52' />
            </template>
          </VMenu>
        </div>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MenuPanel',
  props: {
    childItem: {
      type: Array,
      default: () => []
    },
    open: {
      default: true,
      type: Boolean
    },
    isMobile: {
      default: false,
      type: Boolean
    },
    isMainMenu: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      opened: 'dashboard'
    }
  }
}
</script>

<style scoped>

</style>
