<template>
  <div class='sidebar'>
    <div class='logo'>
      <nuxt-link to='/' class='w-full'>
        <Logo
          :open='open'
          :is-mobile='isMobile' />
      </nuxt-link>
    </div>
    <perfect-scrollbar>
      <div class='sidebar-panel'>
        <MenuPanel
          :child-item='menus'
          :is-main-menu='true'
          :open='open'
          :is-mobile='isMobile'
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
      type: Boolean
    },
    isMobile: {
      default: false,
      type: Boolean
    }
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
              name: 'Food Menu',
              pathName: 'food-menu'
            },
            {
              name: 'Food Menu 2',
              id: 'fm2',
              children: [
                {
                  name: 'Food Menu 7',
                  pathName: 'food-menu7'
                },
                {
                  name: 'Food Menu 8',
                  pathName: 'food-menu8'
                }
              ]
            },
            {
              name: 'Workout',
              pathName: 'workout'
            },
            {
              name: 'Customers',
              pathName: 'customers'
            }
          ]
        },
        {
          name: 'Shop',
          id: 'shop',
          icon: 'fa fa-table-list',
          children: [

            {
              name: 'Invoice',
              pathName: 'invoice'
            },
            {
              name: 'Product',
              pathName: 'product'
            },
            {
              name: 'Checkout',
              pathName: 'checkout'
            },
            {
              name: 'Email Inbox',
              pathName: 'email-inbox'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import "../../assets/styles/sidebar.scss";
</style>
