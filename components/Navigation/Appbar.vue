<template>
  <div class='app-bar shadow-sm'>
    <div class='flex items-center'>
      <nuxt-link to='/' class='w-full block md:hidden'>
        <Logo
          :open='open'
          :is-mobile='isMobile' />
      </nuxt-link>
      <div class='nav-toggle mr-5 md:ml-0 ml-3 xl:block lg:hidden md:hidden block' @click="$emit('change')">
        <div class='hamburger' :class="{'closed':!open}">
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
        </div>
      </div>
      <div class='text-3xl font-semibold md:block hidden'>Dashboard</div>
    </div>
    <div class='flex items-center'>
      <form class='lg:block hidden mx-1 sm:mx-3'>
        <label for='search' class='mb-2 text-lg font-medium text-gray-900 sr-only dark:text-white'>Search</label>
        <div class='relative'>
          <div class='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-dustTxtColor'>
            <font-awesome-icon icon='fa-solid fa-search' class='text-2xl'></font-awesome-icon>
          </div>
          <input
            id='search' type='search'
            class='block w-full p-4 pl-12 text-sm text-dustTxtColor focus:outline-none rounded-2xl bg-dustColor'
            placeholder='Search' required>
        </div>
      </form>
      <AppNotifications class='mx-1 sm:mx-3' />
      <AppChat class='mx-1 sm:mx-3' />
      <AppProfile class='mx-1 sm:mx-3' />
    </div>
  </div>
</template>

<script>
import AppNotifications from '../Utils/AppNotifications'
import AppChat from '../Utils/AppChat'
import AppProfile from '../Utils/AppProfile'
import Logo from './Logo'

export default {
  name: 'Appbar',
  components: { Logo, AppProfile, AppChat, AppNotifications },
  props: {
    open: {
      default: true,
      type: Boolean
    },
    isMobile: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped lang='scss'>
.app-bar {
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  height: 120px;
  background: white;
  padding: 0 2.4rem;
  z-index: 500;
  @media (max-width: 1024px) {
    height: 80px;
    padding: 0 12px;
  }

  .nav-toggle {
    cursor: pointer;
    height: 26px;

    .hamburger {
      width: 30px;
      position: relative;
      height: 30px;

      .line {
        background: theme('colors.primary.DEFAULT') !important;
        height: 3px;
        transition: all 0.3s ease-in-out 0s;
        border-radius: 4px;
        position: absolute;
        right: 0;

        &:first-child {
          width: 20px;
          top: 5px;
        }

        &:nth-child(2) {
          width: 28px;
          top: 13px;
        }

        &:last-child {
          width: 20px;
          top: 21px;
        }
      }

      &:hover .line {
        width: 26px;
      }

      &.closed, &.closed:hover {
        .line {
          &:first-child {
            width: 12px;
            top: 8px;
            transform: rotate(45deg);
          }

          &:last-child {
            width: 12px;
            top: 18px;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
}
</style>
