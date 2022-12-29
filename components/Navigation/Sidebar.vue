<template>
  <div class="sidebar">
    <div class="logo">
      <nuxt-link to="/" class="w-full">
        <Logo :open="open" :is-mobile="isMobile" />
      </nuxt-link>
    </div>
    <perfect-scrollbar>
      <div class="sidebar-panel">
        <MenuPanel
          :child-item="menus"
          :is-main-menu="true"
          :open="open"
          :is-mobile="isMobile"
        />
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import Logo from './Logo'
import MenuPanel from '~/components/Navigation/MenuPanel'

export default {
  name: 'Sidebar',
  components: { Logo, MenuPanel },
  props: {
    open: {
      default: true,
      type: Boolean,
    },
    isMobile: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      panel: false,
      opened: 'dashboard',
      menus: [
        {
          name: 'Dashboard',
          id: 'dashboard',
          icon: 'fa fa-table-list',
          children: [
            {
              name: 'Classes',
              pathName: '/dashboard/classes',
              id: '1',
              children: [
                {
                  name: 'All Classes',
                  pathName: '/dashboard/classes',
                },
                {
                  name: 'Create Class',
                  pathName: '/dashboard/classes/create-class',
                },
              ],
            },
            {
              name: 'Products',
              pathName: '/dashboard/products',
              id: '2',
              children: [
                {
                  name: 'All Products',
                  pathName: '/dashboard/products',
                },
                {
                  name: 'Create Product',
                  pathName: '/dashboard/products/create-product',
                },
              ],
            },

            {
              name: 'Bookings',
              pathName: '/dashboard/orders',
            },
            {
              name: 'Customers',
              pathName: '/dashboard/customers',
            },
            {
              name: 'Inbox',
              pathName: '/dashboard/inbox',
            },
            {
              name: 'Profile',
              pathName: '/dashboard/profile',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/sidebar.scss';
</style>
